import * as React from "react";
import "./App.css";

import { withAppContext, withLocaleContext } from "../../context/";
import HomePage from "../../pages/HomePage";

@withAppContext
@withLocaleContext
class App extends React.Component {
  public render() {
    const { app, locale }: any = this.props;
    console.log("this.props: ", this.props);

    return (
      <div className="App">
        <header className="App-header">{app.title}</header>
        <h1 className="App-title">Locale is {locale.language}</h1>
        <button onClick={() => app.changeTitle("Hello World")}>
          Change Title to Hello World
        </button>
        <button onClick={() => locale.toggleLanguage()}>
          Toggle Locale {locale.language}
        </button>
        <HomePage />
      </div>
    );
  }
}

export default App;
// export default withAppContext(withLocaleContext(App));
