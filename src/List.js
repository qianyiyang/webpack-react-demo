import React, { Component, Fragment } from "react";
import moment from "moment";
import "moment/locale/zh-cn";
import about from "./../about.md";

console.log(about);
// 设置中文
// moment.locale("zh-cn");

export default class List extends Component {
    btnClick = () => {
        import("./test").then((data) => {
            console.log(data);
            data.a();
        });
    };
    render() {
        console.log($);
        let time = moment().format("YYYY-MM-DD HH:mm:ss");
        return (
            <Fragment>
                <div>{time}</div>
                <div>111</div>
                <button onClick={this.btnClick}>222</button>
            </Fragment>
        );
    }
}
