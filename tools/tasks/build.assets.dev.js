var path_1 = require('path');
var workflow_config_1 = require('../workflow.config');
module.exports = function buildAssetsDev(gulp) {
    return function () {
        return gulp.src([
            path_1.join(workflow_config_1.PATH.src.all, '**/*.html'),
            path_1.join(workflow_config_1.PATH.src.all, '**/*.css')
        ])
            .pipe(gulp.dest(workflow_config_1.PATH.dest.dev.all));
    };
};
//# sourceMappingURL=build.assets.dev.js.map