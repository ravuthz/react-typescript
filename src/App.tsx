import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

import { AppConsumer, LocaleConsumer } from "./context/";

class App extends React.Component {
  public render() {
    return (
      <AppConsumer>
        {({ title, changeTitle }) => (
          <LocaleConsumer>
            {({ locale, toggleLocale }) => (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">{title}</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.tsx</code> and save to
                  reload.
                </p>{" "}
                <button onClick={() => changeTitle("Hello World")}>
                  Change Title to Hello World
                </button>
                <button onClick={() => toggleLocale()}>
                  Toggle Locale {locale.toLowerCase()}
                </button>
              </div>
            )}
          </LocaleConsumer>
        )}
      </AppConsumer>
    );
  }
}

export default App;
