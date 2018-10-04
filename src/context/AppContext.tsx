import * as React from "react";

const initialValue = {
  title: "",
  changeTitle: (title: string) => {}
};

export const AppContext = React.createContext(initialValue);

export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {
  state = {
    title: "React TypeScript Application"
  };
  public render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          changeTitle: this.changeTitle
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }

  private changeTitle = (title: string) => this.setState({ title });
}
