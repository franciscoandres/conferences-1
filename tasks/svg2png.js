const gulp = require('gulp');
const svg2png = require('gulp-svg2png');
const rename = require('gulp-rename');

module.exports = function(done) {
  gulp
    .src('./dist/teasers/svg/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./dist/teasers/png'));
  done();
};
