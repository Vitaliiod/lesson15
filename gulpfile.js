var gulp = require('gulp');

var concat = require('gulp-concat');



var csses = [

    'node_modules/materialize-css/dist/css/materialize.min.css',
    'assets/css/style.css'

];



var jess = [

    'node_modules/materialize-css/dist/js/materialize.min.js'

];  




function styles() {

    return gulp.src(csses)
        .pipe(concat('all.css'))
      .pipe(gulp.dest('./assets'));

}

function js() {

    return gulp.src(jess)
        .pipe(concat('all.js'))
      .pipe(gulp.dest('./assets'));

}



exports.styles = styles;
exports.js = js;