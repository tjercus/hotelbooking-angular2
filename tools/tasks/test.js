var path_1 = require('path');
var workflow_config_1 = require('../workflow.config');
module.exports = function test(gulp, plugins) {
    return function () {
        gulp.task('test', ['karma.start'], function () {
            if (!process.env.TRAVIS) {
                plugins.watch(path_1.join(workflow_config_1.PATH.src.all, '**'), function () { return gulp.start('karma.start'); });
            }
        });
    };
};
//# sourceMappingURL=test.js.map