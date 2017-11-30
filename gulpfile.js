const gulp = require('gulp');
const replace = require('gulp-replace');
const URL = "https://docs.google.com/spreadsheets/d/1aAmZhj16570MTjCmkij7igyrvfZxDfVnvpoaNPj0rvM/export?format=csv&id=1aAmZhj16570MTjCmkij7igyrvfZxDfVnvpoaNPj0rvM&gid=0";
const request = require('request');
const d3 = require('d3-dsv');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var ftpClient = require('ftp-client');
var config = require('config');

gulp.task('templates', function () {
    request(URL, function (error, response, body) {
        const rows = d3.csvParseRows(body);
        var map = {};
        rows.forEach(function (row) {
            map[row[0]] = {
                'fr': row[1],
                'en': row[3]
            };
        });
        ['fr', 'en'].forEach(function (locale) {

            gulp.src(['src/index.html'])
                .pipe(replace(/\{\{([a-zA-Z0-9-_]+)}}/g, function (match, p1, offset, string) {
                    if (map[p1] && map[p1][locale]) {
                        return map[p1][locale]
                    }
                    return "";
                }))
                .pipe(gulp.dest(locale === 'fr' ? 'dist' : 'dist/' + locale));
        });

    });
});

gulp.task('compress-css', function () {
    return gulp.src(['src/walkme.css', 'lib/fonts.css', 'lib/reset.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});

gulp.task('compress-js', function (cb) {
    pump([
            gulp.src('src/*.js'),
            uglify(),
            gulp.dest('build')
        ],
        cb
    );
});

gulp.task('concat-js', function () {
    return gulp.src([
        './lib/jquery-3.2.1.min.js',
        './lib/jquery.validate.min.js',
        './lib/createjs-2015.11.26.min.js',
        './build/anim.js',
        './build/walkme.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('concat-css', function () {
    return gulp.src([
        './build/reset.css',
        './build/fonts.css',
        './build/walkme.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('static', ['compress-css', 'concat-css', 'compress-js', 'concat-js']);
gulp.task('default', ['compress-css', 'concat-css', 'compress-js', 'concat-js', 'templates']);
gulp.task('watch', function () {
    gulp.watch('src/walkme.css', ['compress-css', 'concat-css']);
    gulp.watch('src/walkme.js', ['compress-js', 'concat-js']);
    gulp.watch('src/index.html', ['templates']);
});

gulp.task('uploadToProd', function () {
    var client = new ftpClient(config.ftp, {overwrite: 'all'});
    client.connect(function(){
        client.upload(['dist/**'], '/test', {baseDir: 'dist'}, function (result) {
            console.log(result);
        });
    });
});