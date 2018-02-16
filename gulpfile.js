var babel = require("gulp-babel");
var gulp = require('gulp');
var concat = require("gulp-concat");
var clean = require('gulp-clean');
var debug = require('gulp-debug');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');



gulp.task("lodash-core.min.js", () => {
  return gulp.src([
      "sources/lodash-core.js"
    ])
    .pipe(concat("lodash-core.min.js"))
    .pipe(uglify())
    // .pipe(babel({
    //   presets: ["es2015"],
    //   compact: true
    // }))
    .pipe(gulp.dest("distrib"))
});

gulp.task('watch:lodash-core.min.js', function() {
  watch("./sources/lodash-core.js", function() {
    gulp.run('lodash-core.min.js');
  });
});

gulp.task('default', ['lodash-core.min.js']);


gulp.task('all', ['default']);

gulp.task("watch", ["watch:lodash-core.min.js"]);