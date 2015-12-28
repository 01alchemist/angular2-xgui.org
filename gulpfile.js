'use strict';

var autoprefixer = require('gulp-autoprefixer');
var clangFormat = require('clang-format');
var del = require('del');
var exec = require('child_process').exec;
var gulp = require('gulp');
var gulpFormat = require('gulp-clang-format');
var gulpPlugins = require('gulp-load-plugins')();
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var madge = require('madge');
var merge = require('merge');
//var merge2 = require('merge2'); TODO: delete from package.json
var path = require('path');
//var licenseWrap = require('./tools/build/licensewrap'); TODO: delete from package.json

var watch = require('./tools/build/watch');

//var pubget = require('./tools/build/pubget'); TODO: delete
//var proto = require('./tools/build/proto'); TODO: delete
var linknodemodules = require('./tools/build/linknodemodules');
//var jsserve = require('./tools/build/jsserve'); TODO: delete
//var karma = require('karma');
//var minimist = require('minimist'); TODO: delete from package.json
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
//var util = require('./tools/build/util'); TODO: delete
var bundler = require('./tools/build/bundle');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
//var buildRouter = require('./modules/angular1_router/build'); TODO: delete
//var uglify = require('gulp-uglify'); TODO: delete from package.json
//var shouldLog = require('./tools/build/logging'); TODO: delete
var tslint = require('gulp-tslint');
//var sauceConf = require('./sauce.conf'); TODO: delete
//var os = require('os'); TODO: delete
var dts = require('dts-bundle');

require('./tools/check-environment')({
    requiredNpmVersion: '>=2.9.0',
    requiredNodeVersion: '>=0.12.2'
});

var build_dir = "../RealView3D/RealView3D/static/libs/angular2-xgui.dev.js";//'build/angular2-xgui.dev.js'
//var build_dir = 'build/angular2-xgui.dev.js';

/**
 * dynamic require in build.tools so we can bootstrap TypeScript compilation
 */
function throwToolsBuildMissingError() {
    throw new Error('ERROR: build.tools task should have been run before using angularBuilder');
}


var angularXGUIBuilder = {
    rebuildBrowserDevTree: throwToolsBuildMissingError,
    rebuildBrowserProdTree: throwToolsBuildMissingError,
    mock: true
};


function sequenceComplete(done) {
    return function (err) {
        if (err) {
            var error = new Error('build sequence failed');
            error.showStack = false;
            done(error);
        } else {
            done();
        }
    };
}

/**
 * config
 */
var CONFIG = {
    dest: {
        js: {
            all: 'dist/js',
            dev: {
                es6: 'dist/js/dev/es6',
                es5: 'dist/js/dev/es5'
            },
            prod: {
                es6: 'dist/js/prod/es6',
                es5: 'dist/js/prod/es5'
            },
            cjs: 'dist/js/cjs'
        },
        docs: 'dist/docs'
    }
};


/**
 * clean
 */
gulp.task('build/clean.tools', function() {
    del(path.join('dist', 'tools'));
});

gulp.task('build/clean.js', function(done) {
    del(CONFIG.dest.js.all, done);
});

gulp.task('build/clean.docs',  function(done) {
    del(CONFIG.dest.docs, done);
});


/**
 * formatting
 */
function doCheckFormat() {
    return gulp.src(['modules/**/*.ts', 'tools/**/*.ts', '!**/typings/**/*.d.ts'])
        .pipe(gulpFormat.checkFormat('file', clangFormat));
}

gulp.task('check-format', function() {
    return doCheckFormat().on('warning', function(e) {
        console.log("NOTE: this will be promoted to an ERROR in the continuous build");
    });
});

gulp.task('enforce-format', function() {
    return doCheckFormat().on('warning', function(e) {
        console.log("ERROR: You forgot to run clang-format on your change.");
        console.log("See https://github.com/angular/angular/blob/master/DEVELOPER.md#formatting");
        process.exit(1);
    });
});

gulp.task('lint', ['build.tools'], function() {
    // Built-in rules are at
    // https://github.com/palantir/tslint#supported-rules
    var tslintConfig = {
        "rules": {
            "semicolon": true,
            "requireReturnType": true,
            "requireParameterType": true
        }
    };

    return gulp.src(['modules/xgui/src/**/*.ts', '!modules/xgui/src/test_lib/**'])
        .pipe(tslint({configuration: tslintConfig, rulesDirectory: 'dist/tools/tslint'}))
        .pipe(tslint.report('prose', {emitError: true}));
});


/**
 * check circular dependencies in Node.js context
 */
gulp.task('build/checkCircularDependencies', function (done) {
    var dependencyObject = madge(CONFIG.dest.js.dev.es6, {
        format: 'es6',
        paths: [CONFIG.dest.js.dev.es6],
        extensions: ['.js'],
        onParseFile: function(data) {
            data.src = data.src.replace(/import \* as/g, "//import * as");
        }
    });
    var circularDependencies = dependencyObject.circular().getArray();
    if (circularDependencies.length > 0) {
        console.log(circularDependencies);
        process.exit(1);
    }
    done();
});


/**
 * public task to build tools
 */
gulp.task('build.tools', ['build/clean.tools'], function(done) {
    runSequence('!build.tools', sequenceComplete(done));
});



/**
 * bundle declaration
 */
gulp.task('bundle.declaration', function() {
    dts.bundle({
        name: "xgui/angular2-xgui",
        main: "modules/xgui/angular2-xgui.d.ts",
        baseDir: "./",
        out:"build/angular2-xgui.d.ts",
        externals: false,
        exclude: function(file, external){
            return file.indexOf("angular2.d.ts") > -1;
        }
    });

    return true;
});
/**
 * private task to build tools
 */
gulp.task('!build.tools', function() {
    var stream = gulp.src(['tools/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc({target: 'ES5', module: 'commonjs',
            // Don't use the version of typescript that gulp-typescript depends on, we need 1.5
            // see https://github.com/ivogabe/gulp-typescript#typescript-version
            typescript: require('typescript')}))
        .on('error', function(error) {
            // nodejs doesn't propagate errors from the src stream into the final stream so we are
            // forwarding the error into the final stream
            stream.emit('error', error);
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/tools'))
        .on('end', function() {
            var AngularXGUIBuilder = require('./dist/tools/broccoli/angular-xgui_builder').AngularXGUIBuilder;
            angularXGUIBuilder = new AngularXGUIBuilder({
                outputPath: 'dist'
            });
        });

    return stream;
});

gulp.task('broccoli.js.dev', ['build.tools'], function(done) {
    runSequence('!broccoli.js.dev', sequenceComplete(done));
});

gulp.task('!broccoli.js.dev', function() {
    return angularXGUIBuilder.rebuildBrowserDevTree();
});

gulp.task('!broccoli.js.prod', function() {
    return angularXGUIBuilder.rebuildBrowserProdTree();
});

gulp.task('build.js.dev', ['build/clean.js'], function(done) {
    runSequence(
        'broccoli.js.dev',
        /*'build.css.material',*/
        sequenceComplete(done)
    );
});

gulp.task('build.js.prod', ['build.tools'], function(done) {
    runSequence('!broccoli.js.prod', sequenceComplete(done));
});

var bundleConfig = {
    paths: {
        "*": "dist/js/prod/es5/*.js"
    },
    meta: {
      'angular2/angular2': {
        build: false
      }
    }
};

/**
 * production build
 */
gulp.task('!bundle.js.prod', ['build.js.prod'], function() {
    return bundler.bundle(
        bundleConfig,
        'xgui/angular2-xgui',
        './dist/build/angular2-xgui.js',
        {
            sourceMaps: true
        });
});

/**
 * minified production build
 */
gulp.task('bundle.js.min', ['build.js.prod'], function() {
    return bundler.bundle(
        bundleConfig,
        'xgui/angular2-xgui',
        build_dir,
        {
            sourceMaps: true,
            minify: true
        });
});

/**
 * development build
 */
gulp.task('bundle.js.dev', ['build.js.dev'], function() {
    var devBundleConfig = merge(true, bundleConfig);
    devBundleConfig.paths = merge(true, devBundleConfig.paths, 
        {"*": "dist/js/dev/es5/*.js"}
      );
    return bundler.bundle(
        devBundleConfig,
        'xgui/angular2-xgui',
        build_dir,
        {
            sourceMaps: true
        }
    );
});

/**
 * angular material testing rules
 */
gulp.task('build.css.material', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(CONFIG.dest.js.prod.es5))
        .pipe(gulp.dest(CONFIG.dest.js.dev.es5));
});

gulp.task('cleanup.builder', function() {
    return angularXGUIBuilder.cleanup();
});


// register cleanup listener for ctrl+c/kill used to quit any persistent task (autotest or serve tasks)
process.on('SIGINT', function() {
    if (!angularXGUIBuilder.mock) {
        runSequence('cleanup.builder', function () {
            process.exit();
        });
    }
    process.exit();
});


// register cleanup listener for all non-persistent tasks
var beforeExitRan = false;

process.on('beforeExit', function() {
    if (beforeExitRan) return;

    beforeExitRan = true;

    if (!angularXGUIBuilder.mock) {
        gulp.start('cleanup.builder');
    }
});


/**
 * Build tasks
 */
gulp.task('build.js', ['bundle.js.dev']);

gulp.task('clean', ['build/clean.tools', 'build/clean.js', 'build/clean.docs']);

gulp.task('build', ['build.js']);
gulp.task('default', ['build']);
