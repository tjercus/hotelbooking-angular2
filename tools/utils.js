var fs_1 = require('fs');
var path_1 = require('path');
var slash = require('slash');
var connectLivereload = require('connect-livereload');
var serveStatic = require('serve-static');
var openResource = require('open');
var express = require('express');
var minilrFn = require('mini-lr');
var workflow_config_1 = require('./workflow.config');
var minilr = minilrFn();
function notifyLiveReload(e) {
    var fileName = e.path;
    minilr.changed({
        body: { files: [fileName] }
    });
}
exports.notifyLiveReload = notifyLiveReload;
function livereload() {
    minilr.listen(workflow_config_1.LIVE_RELOAD_PORT);
}
exports.livereload = livereload;
function transformPath(plugins, env) {
    var v = '?v=' + getVersion();
    return function (filepath) {
        var filename = filepath.replace('/' + workflow_config_1.PATH.dest[env].all, '') + v;
        arguments[0] = path_1.join(workflow_config_1.APP_BASE, filename);
        return plugins.inject.transform.apply(plugins.inject.transform, arguments);
    };
}
exports.transformPath = transformPath;
function injectableDevAssetsRef() {
    return workflow_config_1.PATH.src.lib_inject.map(function (path) {
        return path_1.join(workflow_config_1.PATH.dest.dev.lib, slash(path).split('/').pop());
    });
}
exports.injectableDevAssetsRef = injectableDevAssetsRef;
function templateLocals() {
    return {
        VERSION: getVersion(),
        APP_BASE: workflow_config_1.APP_BASE
    };
}
exports.templateLocals = templateLocals;
function tsProject(plugins) {
    return plugins.typescript.createProject('tsconfig.json', {
        typescript: require('typescript')
    });
}
exports.tsProject = tsProject;
function serveSPA(env) {
    var app = express();
    app.use(workflow_config_1.APP_BASE, connectLivereload({ port: workflow_config_1.LIVE_RELOAD_PORT }), serveStatic(path_1.resolve(process.cwd(), workflow_config_1.PATH.dest[env].all)));
    app.all(workflow_config_1.APP_BASE + '*', function (req, res) {
        return res.sendFile(path_1.resolve(process.cwd(), workflow_config_1.PATH.dest[env].all, 'index.html'));
    });
    app.listen(workflow_config_1.PORT, function () {
        return openResource('http://localhost:' + workflow_config_1.PORT + workflow_config_1.APP_BASE);
    });
}
exports.serveSPA = serveSPA;
function getVersion() {
    var pkg = JSON.parse(fs_1.readFileSync('package.json').toString());
    return pkg.version;
}
//# sourceMappingURL=utils.js.map