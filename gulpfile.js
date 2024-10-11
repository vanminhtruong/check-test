const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// Biên dịch SCSS
function styles() {
  return gulp
    .src('src/scss/styles.scss')  // Chỉ định file nguồn
    .pipe(sass().on('error', sass.logError))  // Biên dịch SCSS
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),  // Áp dụng Tailwind CSS
      autoprefixer()  // Tự động thêm tiền tố cho CSS
    ]))
    .pipe(gulp.dest('dist/css'));  // Lưu file styles.css
}

// Theo dõi sự thay đổi
function watch() {
  gulp.watch('src/scss/**/*.scss', styles);  // Theo dõi thay đổi SCSS
  gulp.watch('src/**/*.html', styles);  // Theo dõi thay đổi HTML
}

exports.styles = styles;
exports.watch = watch;
