import {join} from 'path';
import {PATH} from '../workflow.config';

export = function buildAssetsDev(gulp) {
  return function () {
    return gulp.src([
        join(PATH.src.all, '**/*.html'),
        join(PATH.src.all, '**/*.png'),
        join(PATH.src.all, '**/*.css')
      ])
      .pipe(gulp.dest(PATH.dest.dev.all));
  };
}
