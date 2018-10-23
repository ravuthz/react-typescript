import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./comoponents/App/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { AppProvider } from "./context/AppContext";
import { LocaleProvider } from "./context/LocaleContext";

ReactDOM.render(
  <AppProvider>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </AppProvider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
