var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var Builder = require('systemjs-builder');

module.exports.bundle = function(buildConfig, moduleName, outputFile, outputConfig, sfx) {
    var sfx = sfx || false;
    var builder = new Builder();
    builder.config(buildConfig);
    if (sfx) {
        return builder.buildSFX(moduleName, outputFile, outputConfig);
    } else {
        return builder.build(moduleName, outputFile, outputConfig);
    }
};


module.exports.modify = function(srcs, concatName) {
  return gulp.src(srcs)
    .pipe(concat(concatName))
    .pipe(replace('sourceMappingURL', 'sourceMappingURLDisabled'))  // TODO: add concat for sourceMaps
};