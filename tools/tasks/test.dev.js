var path_1 = require('path');
var workflow_config_1 = require('../workflow.config');
module.exports = function testDev(gulp, plugins) {
    return function () {
        plugins.watch(path_1.join(workflow_config_1.PATH.src.all, '**'), function () { return gulp.start('build.test'); });
    };
};
//# sourceMappingURL=test.dev.js.map