var gulp = require('gulp');
var shell = require('gulp-shell');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var del = require('del');

var release_dir = "./bin";
var base = "./src";

gulp.task('cleanCss', function(cb) {del([release_dir+'/css/*.css'],{force:true}, cb);});
gulp.task('cleanRelease', function(cb) {del([release_dir],{force:true}, cb);});

var tsc_watch = 'tsc -m commonjs -t es5 --emitDecoratorMetadata -experimentalDecorators <%= file.path %> --sourceMap';
var echo = 'echo "[--:--:--] Compiling \033[1;33m<%= className(file.path) %>\033[0m';

/* Compile TypeScript */
gulp.task('compile', function(){
    return gulp.src(base+'/GUICore.ts')
        .pipe(shell([echo+' (es5)"', tsc_watch], {
            ignoreErrors:true,
            templateData: {
                className: function(s){
                    return s.substring(s.lastIndexOf("/")+1, s.length);
                }
            }
        }));
});

gulp.task('watch-ts', ['compile'], function() {
    gulp.watch(base+'/**/*.ts', ['compile']);
});


gulp.task('watch-css', ['minify-css'], function() {
    gulp.watch(base+'/**/*.css', ['minify-css']);
});

gulp.task('minify-css', function() {
    return gulp.src(base+'/**/*.css')
        .pipe(concatCss("guicore.css",{rebaseUrls:false}))
        .pipe(minifyCss({compatibility: 'ie9'}))
        .pipe(gulp.dest(release_dir+'/css'));
});

gulp.task('build', function(cb){
    runSequence('compile', 'minify-css', cb);
});

gulp.task('default', ['build']);
gulp.task('watch', function() {
    gulp.watch(base+'/**/*.{ts,css}', ['minify-css','compile']);
});