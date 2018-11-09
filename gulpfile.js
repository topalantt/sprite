var gulp                = require('gulp'),
    svgSprite           = require('gulp-svg-sprite'),

// More complex configuration example
    config = {
      shape: {
        dimension: {         // Set maximum dimensions
          maxWidth    : 40,
          maxHeight   : 40
        },
        spacing: {         // Add padding
          padding     : 0
        },
        dest          : 'out/intermediate-svg'    // Keep the intermediate files
      },
      mode : {
        view : {         // Activate the «view» mode
          bust        : false,
          render : {
            scss      : true      // Activate Sass output (with default options)
          },
          prefix: "%%svg-%s"
        },
        symbol        : false      // Activate the «symbol» mode
      }
    };

gulp.task('default', function () {
  return gulp.src('**/*.svg', {cwd: 'svg'})
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));
});
