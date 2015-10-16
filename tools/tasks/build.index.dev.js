var path_1 = require('path');
var utils_1 = require('../utils');
var workflow_config_1 = require('../workflow.config');
module.exports = function buildIndexDev(gulp, plugins) {
    return function () {
        var target = gulp.src(utils_1.injectableDevAssetsRef(), { read: false });
        return gulp.src(path_1.join(workflow_config_1.PATH.src.all, 'index.html'))
            .pipe(plugins.inject(target, {
            transform: utils_1.transformPath(plugins, 'dev')
        }))
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(workflow_config_1.PATH.dest.dev.all));
    };
};
//# sourceMappingURL=build.index.dev.js.map