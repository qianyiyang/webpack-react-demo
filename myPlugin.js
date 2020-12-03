class MyPlugin {
    apply(compiler) {
        console.log("MyPlugin 启动");
        // console.log(compiler);

        compiler.hooks.emit.tap("MyPlugin", (complation) => {
            // console.log(complation.assets);
            for (const name in complation.assets) {
                // console.log(complation.assets[name].source());

                if (name.endsWith(".js")) {
                    const contents = JSON.stringify(
                        complation.assets[name].source()
                    );
                    const withoutComments = JSON.parse(
                        contents.replace("window", "global")
                    );
                    complation.assets[name] = {
                        source: () => withoutComments,
                        size: () => withoutComments.length,
                    };
                }
            }
        });
    }
}

module.exports = MyPlugin;
