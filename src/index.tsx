import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/app/app";

let h1:string = `Конструктор сайтов`;

ReactDOM.render(
    <App
      h1={h1}>
    </App>,
    document.getElementById(`root`)
);
