gulp-css-to-less
=======
A gulp plugin which converts css files to less files

Download
-------

```
npm install gulp-css-to-less
```


Usage
-------

```javascript
var cssToLess = require('gulp-css-to-less');
gulp.task('cssToLess',function(){
    gulp.src('themes/system/css/*.css')
		.pipe(cssToLess())
		.pipe(gulp.dest('themes/system/less'));
});
```

LICENSE
-------

(MIT License)
