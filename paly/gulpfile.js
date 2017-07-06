var gulp = require('gulp');
//var babel = require('gulp-babel'); //es6转es5
//var rename = require('gulp-rename');
//var jsmin = require('gulp-jsmin'); //js压缩插件


//gulp.task('default', function () {
//gulp.src('src/**/*.js')
//   .pipe(jsmin())
//   .pipe(rename({suffix: '.min'}))
//    .pipe(gulp.dest('dist'));
//});
//
//gulp.task("start",["default"])
//



//gulp.task('jsTask', function(){
//	gulp.src('src/**/*.js')
//	.pipe(babel({presets:['es2015']})) //es6转es5
//	.pipe(jsmin()) //js压缩
//	 .pipe(rename({suffix: '.min'}))
//	.pipe(gulp.dest('dist'));
//});
//gulp.task('default', ['jsTask']);
//


//压缩html
 var htmlminify = require("gulp-html-minify");
gulp.task('build-html' , function(){
    return gulp.src('src/*.html')
        .pipe(htmlminify())
        .pipe(gulp.dest('dist')
});

  gulp.task("start",["build-html"])


//压缩css
//	var gulp = require('gulp');
// var cleanCSS = require('gulp-clean-css');
// 
// gulp.task('minify-css', function() {
// return gulp.src('src/css/*.css')
//  .pipe(cleanCSS({compatibility: 'ie8'}))
//  .pipe(gulp.dest('dist'));
// });
//gulp.task('default', ['minify-css']);

//压缩图片
// var imagemin = require('gulp-imagemin');
// 
// gulp.task('imagemin', () =>
//   gulp.src('src/images2/*')
//      .pipe(imagemin())
//       .pipe(gulp.dest('dist/images'))
// );
//
//	gulp.task("start",["imagemin"])
