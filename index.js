var _ = require('lodash');
var through  = require('through2');
var gutil = require('gulp-util');
var css2less = require('css2less');
var ext = gutil.replaceExtension;

// 默认配置
var defaults = {
    // Indent size
    indentSize: 1,
    // List of vendor prefixes
    vendorPrefixesList: ["-moz", "-o", "-ms", "-webkit"],
    // Indent symbol
    indentSymbol: '\t',
    // Selector separator
    selectorSeparator: ',\n',
    // Start first '{' from the new line
    blockFromNewLine: false,
    // Separator between blocks
    blockSeparator: '\n',
    // Use variables for colors
    updateColors: false,
    // Create function for vendor styles
    vendorMixins: true
};

// 转化布尔值
function bool(b) {
    return !(/^(false|0)$/i).test(b) && !!b;
}

// 尝试从package.json读取参数
try {
    var pkg = JSON.parse(fs.readFileSync(process.cwd() + '/package.json') || '{}');
    var options = pkg['gulp-css-to-less'] || defaults;
    if (typeof options === 'string') {
        var base = path.relative(__dirname, process.cwd());
        options = require(path.join(base, options)) || defaults;
    }
} catch (err) {
    options = defaults;
}

// 组装配置
options = _.defaults(options, defaults);

module.exports = function(opts){
    // 组装配置
    options = _.merge({}, options, opts);
    // 开始转换
	var cssToLess = function (file,enc,cb){
        var content = file.contents.toString();
        var options = {};
        content = css2less(content, options);
		file.contents = new Buffer(content);
		file.path = ext(file.path, '.less');
		this.push(file);
		cb();        
	}
	return through.obj(cssToLess);
}

