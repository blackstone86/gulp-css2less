gulp-css2less
=======
A gulp plugin which converts css files to less files

Download
-------

```
npm install gulp-css2less
```


Usage
-------

```javascript
var cssToLess = require('gulp-css2less');
gulp.task('cssToLess',function(){
    gulp.src('themes/system/css/*.css')
		.pipe(cssToLess())
		.pipe(gulp.dest('themes/system/less'));
});
```

LICENSE
-------

(MIT License)
