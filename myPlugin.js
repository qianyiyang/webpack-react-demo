class MyPlugin {
    apply(compiler) {
        console.log("MyPlugin 启动");
        // console.log(compiler);

        // compiler.hooks.emit.tap("MyPlugin", (complation) => {
        //     for (const name in complation.assets) {
        //         console.log(name);
        //     }
        // });
    }
}

module.exports = MyPlugin;
