var gulp = require('gulp');
var concat = require("gulp-concat");
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');



gulp.task("lodash-core.min.js", () => {
  return gulp.src([
      "./node_modules/lodash/lodash.js"
    ])
    .pipe(concat("lodash-core.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("distrib"))
    .pipe(gulp.dest("docs"))
});

gulp.task('default', gulp.series('lodash-core.min.js'));