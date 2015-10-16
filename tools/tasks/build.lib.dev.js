var workflow_config_1 = require('../workflow.config');
module.exports = function buildLibDev(gulp) {
    return function () {
        return gulp.src([].concat(workflow_config_1.PATH.src.lib_inject, workflow_config_1.PATH.src.lib_copy_only))
            .pipe(gulp.dest(workflow_config_1.PATH.dest.dev.lib));
    };
};
//# sourceMappingURL=build.lib.dev.js.map