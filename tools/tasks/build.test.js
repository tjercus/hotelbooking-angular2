var utils_1 = require('../utils');
var workflow_config_1 = require('../workflow.config');
module.exports = function buildTest(gulp, plugins) {
    return function () {
        var config = utils_1.tsProject(plugins);
        var result = gulp.src([
            './app/**/*.ts',
            '!./app/init.ts'
        ])
            .pipe(plugins.plumber())
            .pipe(plugins.inlineNg2Template({ base: workflow_config_1.APP_SRC }))
            .pipe(plugins.typescript(config));
        return result.js
            .pipe(gulp.dest(workflow_config_1.PATH.dest.test));
    };
};
//# sourceMappingURL=build.test.js.map