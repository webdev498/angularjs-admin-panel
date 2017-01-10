'use strict';

// ADD YOUR YANDEX API KEY HERE
// go here for more info
// https://tech.yandex.com/translate/
var YANDEX_API_KEY = '';

var gulp = require('gulp');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var map = require('map-stream');
var rename = require('gulp-rename');
var traverse = require('traverse');
var translate = require('yandex-translate');
var transform = require('vinyl-transform');
var jsonFormat = require('gulp-json-format');

var paths = gulp.paths;

gulp.task('translate', function () {
  var translateFile = transform(function(filename) {
    return map(function(data, done) {
      var j = JSON.parse(data);
      var translateCount = 0;
      var appTranslated = traverse(j).forEach(function(x) {
        if(typeof x !== 'object') {
          var self = this;
          translateCount++;
          translate(x, { to: argv.to, key: YANDEX_API_KEY }, function(err, res) {
            self.update(res.text.toString());
            translateCount--;
            if(translateCount === 0) {
              var finishedJSON = JSON.stringify(appTranslated);
              gutil.log(gutil.colors.green('Translated ' + filename));
              done(null, finishedJSON);
            }
          });
        }
      });
    })
  });

  // make sure we have a from and to language
  if(argv.from !== undefined && argv.to !== undefined) {
    return gulp.src([
      paths.src + '/app/**/il8n/' + argv.from + '.json',
    ])
    .pipe(translateFile)
    .pipe(jsonFormat(4))
    .pipe(rename({
      basename: argv.to,
    }))
    .pipe(gulp.dest(paths.src + '/app'));
  }
  else {
    gutil.log(gutil.colors.red('Need to specify 2 lanuages e.g. translate --from en --to fr <-- translate en json files to French'));
  }
});
