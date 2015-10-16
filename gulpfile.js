var gulp = require('gulp');
var plugins = require('gulp-load-plugins');
var runSequence = require('run-sequence');
var utils_1 = require('./tools/utils');
function tasks(task, option) {
    return require('./tools/tasks/' + task)(gulp, plugins(), option);
}
gulp.task('clean', tasks('clean', 'clean'));
gulp.task('clean.dist', tasks('clean', 'clean.dist'));
gulp.task('clean.app.dev', tasks('clean', 'clean.app.dev'));
gulp.task('clean.test', tasks('clean', 'test'));
gulp.task('tslint', tasks('tslint'));
gulp.task('build.lib.dev', tasks('build.lib.dev'));
gulp.task('build.js.dev', ['tslint'], tasks('build.js.dev'));
gulp.task('build.assets.dev', ['build.js.dev'], tasks('build.assets.dev'));
gulp.task('build.index.dev', tasks('build.index.dev'));
gulp.task('build.app.dev', function (done) {
    runSequence('clean.app.dev', 'build.assets.dev', 'build.index.dev', done);
});
gulp.task('build.dev', function (done) {
    runSequence('clean.dist', 'build.lib.dev', 'build.app.dev', done);
});
gulp.task('build.test', tasks('build.test'));
gulp.task('karma.start', ['build.test'], tasks('karma.start'));
gulp.task('test.dev', ['build.test'], tasks('test.dev'));
gulp.task('test', ['karma.start'], tasks('test'));
gulp.task('postinstall', function (done) {
    runSequence('clean', done);
});
gulp.task('serve.dev', ['build.dev', 'livereload'], tasks('serve.dev'));
gulp.task('livereload', function () {
    utils_1.livereload();
});
//# sourceMappingURL=gulpfile.js.map