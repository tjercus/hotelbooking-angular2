var path_1 = require('path');
var runSequence = require('run-sequence');
var utils_1 = require('../utils');
var workflow_config_1 = require('../workflow.config');
module.exports = function serveDev(gulp, plugins) {
    return function () {
        plugins.watch(path_1.join(workflow_config_1.PATH.src.all, '**'), function (e) {
            return runSequence('build.app.dev', function () { return utils_1.notifyLiveReload(e); });
        });
        utils_1.serveSPA('dev');
    };
};
//# sourceMappingURL=serve.dev.js.map