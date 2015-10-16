var path_1 = require('path');
var utils_1 = require('../utils');
var workflow_config_1 = require('../workflow.config');
module.exports = function buildJsDev(gulp, plugins) {
    return function () {
        var config = utils_1.tsProject(plugins);
        var result = gulp.src([
            path_1.join(workflow_config_1.PATH.src.all, '**/*ts'),
            '!' + path_1.join(workflow_config_1.PATH.src.all, '**/*[\.|_]spec.ts')
        ])
            .pipe(plugins.plumber())
            .pipe(plugins.inlineNg2Template({ base: workflow_config_1.APP_SRC }))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.typescript(config));
        return result.js
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(workflow_config_1.PATH.dest.dev.all));
    };
};
//# sourceMappingURL=build.js.dev.js.map