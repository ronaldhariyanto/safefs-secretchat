var gulp = require('gulp');

var vendor_path = './node_modules/';
var src_path = './src/';

gulp.task('js', function () {
  gulp.src([
      vendor_path + 'vue/dist/vue.min.js',
      src_path + 'js/applications.js',
    ])
    .pipe(gulp.dest('./build'));
});

gulp.task('html', function () {
  gulp.src(
    './src/index.html'
    )
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['js', 'html']);