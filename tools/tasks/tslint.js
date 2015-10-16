var path_1 = require('path');
var workflow_config_1 = require('../workflow.config');
module.exports = function tslint(gulp, plugins) {
    return function () {
        return gulp.src([
            path_1.join(workflow_config_1.PATH.src.all, '**/*.ts'),
            path_1.join(workflow_config_1.PATH.src.all, '../gulpfile.ts'),
            path_1.join(workflow_config_1.PATH.src.all, '../tools/**/*.ts'),
            '!' + path_1.join(workflow_config_1.PATH.src.all, '**/*.d.ts'),
            '!' + path_1.join(workflow_config_1.PATH.src.all, '../tools/**/*.d.ts')
        ])
            .pipe(plugins.tslint())
            .pipe(plugins.tslint.report(plugins.tslintStylish, {
            emitError: false,
            sort: true,
            bell: true
        }));
    };
};
//# sourceMappingURL=tslint.js.map