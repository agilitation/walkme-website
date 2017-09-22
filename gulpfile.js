const gulp = require('gulp');
const replace = require('gulp-replace');
const URL = "https://docs.google.com/spreadsheets/d/1aAmZhj16570MTjCmkij7igyrvfZxDfVnvpoaNPj0rvM/export?format=csv&id=1aAmZhj16570MTjCmkij7igyrvfZxDfVnvpoaNPj0rvM&gid=0";
const request = require('request');
const d3 = require('d3-dsv');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');


gulp.task('templates', function () {
    request(URL, function (error, response, body) {
        const rows = d3.csvParseRows(body);
        var map = {};
        rows.forEach(function (row) {
            map[row[0]] = row[1];
        });
        gulp.src(['src/index.html'])
            .pipe(replace(/\{\{([a-zA-Z0-9-_]+)}}/g, function (match, p1, offset, string) {
                if (map[p1]) {
                    return map[p1]
                }
                console.info(p1);
                return p1;
            }))
            .pipe(gulp.dest('dist/'));

    });
});

gulp.task('compress-css', function(){
    return gulp.src(['src/walkme.css', 'lib/fonts.css', 'lib/reset.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});

gulp.task('compress-js', function (cb) {
    pump([
            gulp.src('src/walkme.js'),
            uglify(),
            gulp.dest('build')
        ],
        cb
    );
});

gulp.task('concat-js', function() {
    return gulp.src([
        './lib/jquery-3.2.1.min.js',
        './lib/jquery.validate.min.js',
        './lib/createjs-2015.11.26.min.js',
        './build/walkme.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('concat-css', function() {
    return gulp.src([
        './build/reset.css',
        './build/fonts.css',
        './build/walkme.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['compress-css', 'concat-css', 'compress-js', 'concat-js', 'templates']);
