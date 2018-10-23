import * as React from "react";

type AppContext = {
  title: string;
  changeTitle: (title: string) => void;
};

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

// HOC
export function withAppContext<C extends React.ComponentClass>(
  Component: C
): C {
  return (((props: any) => (
    <AppConsumer>{app => <Component {...props} app={app} />}</AppConsumer>
  )) as any) as C;
}
