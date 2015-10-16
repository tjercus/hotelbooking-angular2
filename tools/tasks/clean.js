var async = require('async');
var del = require('del');
var path_1 = require('path');
var workflow_config_1 = require('../workflow.config');
function cleanAll(done) {
    async.parallel([
        function (cb) { return cleanDist(cb); },
        function (cb) { return cleanTest(cb); }
    ], done);
}
function cleanDist(done) {
    del(workflow_config_1.PATH.dest.all, done);
}
function cleanAppDev(done) {
    del([
        path_1.join(workflow_config_1.PATH.dest.dev.all, '**/*'),
        '!' + workflow_config_1.PATH.dest.dev.lib,
        '!' + path_1.join(workflow_config_1.PATH.dest.dev.lib, '*')
    ], done);
}
function cleanTest(done) {
    del(workflow_config_1.PATH.dest.test, done);
}
module.exports = function clean(gulp, plugins, option) {
    return function (done) {
        switch (option) {
            case 'clean':
                cleanAll(done);
                break;
            case 'clean.dist':
                cleanDist(done);
                break;
            case 'clean.app.dev':
                cleanAppDev(done);
                break;
            case 'test':
                cleanTest(done);
                break;
            default: done();
        }
    };
};
//# sourceMappingURL=clean.js.map