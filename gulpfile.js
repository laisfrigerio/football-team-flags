const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const minify = require('gulp-csso')
const concat = require('gulp-concat')
var pug = require('gulp-pug')

function css() {
  return gulp.src('./resources/styles/app.scss')
    .pipe(sass({utputStyle: 'app', onError: console.error.bind(console, 'Sass error:')}))
    .pipe(minify(concat('app.css')))
    .pipe(gulp.dest('./css'))
}

function templates() {
  return gulp.src([
    'resources/templates/pages/index.pug',
  ])
  .pipe(pug())
  .pipe(gulp.dest('./'))
}

exports.css = css
exports.templates = templates
exports.default = gulp.parallel(css, templates)