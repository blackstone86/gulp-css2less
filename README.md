gulp-css2less
=======
A gulp plugin which converts css files to less files

Download
-------

```
npm install gulp-css2less
```

Options
-------

#### options.indentSize
Type: `Number`  
Default value: `1`  
Desc: Indent size.

#### options.vendorPrefixesList
Type: `Array`  
Default value: `["-moz", "-o", "-ms", "-webkit"]`  
Desc: List of vendor prefixes.

#### options.indentSymbol
Type: `String`  
Default value: `\t`  
Desc: Indent symbol.

#### options.selectorSeparator
Type: `String`  
Default value: `,\n`  
Desc: Selector separator.

#### options.blockFromNewLine
Type: `Bolean`  
Default value: `false`  
Desc: Start first '{' from the new line

#### options.blockSeparator
Type: `String`  
Default value: `\n`  
Desc: Separator between blocks.

#### options.updateColors
Type: `Bolean`  
Default value: `false`  
Desc: Use variables for colors.

#### options.vendorMixins
Type: `Boolean`  
Default value: `true`  
Desc: Create function for vendor styles.

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
