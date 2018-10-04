import * as React from "react";

const initialValue = {
  locale: "",
  changeLocale: (locale: string) => {},
  toggleLocale: () => {}
};

export const LocaleContext = React.createContext(initialValue);

export const LocaleConsumer = LocaleContext.Consumer;

export class LocaleProvider extends React.Component {
  state = {
    locale: "en"
  };

  public render() {
    return (
      <LocaleContext.Provider
        value={{
          ...this.state,
          changeLocale: this.changeLocale,
          toggleLocale: this.toggleLocale
        }}
      >
        {this.props.children}
      </LocaleContext.Provider>
    );
  }

  private changeLocale = (locale: string) => this.setState({ locale });

  private toggleLocale = () => {
    this.setState(({ locale }: any) => ({
      locale: locale === "en" ? "km" : "en"
    }));
  };
}
