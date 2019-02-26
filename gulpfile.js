`use strict`;

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const maps = require('gulp-sourcemaps');
//const babel = require('gulp-babel');
const del = require('del');

// Clean tasks
gulp.task("clean", function(done){
    del(["dist", "dist/css/origami*.css*", "js/origami*.js*"]);
    done();
});

// Concatinate scripts
gulp.task("concatScripts", function() {
    // Add '.pipe(babel({presets: ['env']}))' for Babel if need be.
    return gulp.src('js/*.js')
    .pipe(maps.init())
    .pipe(concat('origami.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('dist/js'));
});

// Minify JS
gulp.task("miniScripts", function() {
    return gulp.src('dist/js/origami.js')
    .pipe(uglify())
    .pipe(rename('origami.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task("scriptCompiler", gulp.series(["concatScripts", "miniScripts"]), function() {});

// Compile sass
gulp.task("sass", function(){
    return gulp.src('scss/origami.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('dist/css'));
});

// Minify css
gulp.task("miniCSS", function(done) {
    gulp.src('dist/css/origami.css')
    .pipe(cleanCSS())
    .pipe(rename('origami.min.css'))
    .pipe(gulp.dest('dist/css'));
    done();
});

gulp.task("sassCompiler", gulp.series(["sass", "miniCSS"]), function() {});

gulp.task("default", gulp.series(["clean", "sassCompiler", "scriptCompiler"]), function(done){
    done();
});

gulp.task("watch", function(){
    gulp.watch(["scss/**/**/*.scss", "js/*.js"], gulp.series(["clean", "sassCompiler", "scriptCompiler"]));
});
