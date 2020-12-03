const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (source) {
    // console.log(source);
    const options = loaderUtils.getOptions(this);
    // console.log(111, options);

    // 定义⼀个异步处理，告诉webpack,这个loader⾥有异步事件,在⾥⾯调⽤下这个异步
    // 使⽤this.asycn来处理，他会返回this.callback
    const callback = this.async();

    // 强制不缓存
    this.cacheable(false);

    setTimeout(() => {
        const html = marked(source);
        // return `module.exports = ${JSON.stringify(html)}`;

        callback(null, html);
    }, 5000);
};
