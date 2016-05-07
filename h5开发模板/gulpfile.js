/**
 * Created by Administrator on 2016/2/7 0007.
 */
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('images',function () {

    return gulp.src('images/*')
        .pipe(imagemin({
            progressive:true,
            use:[pngquant()]
        }))
        .pipe(gulp.dest('imagesmin'));

})
