import * as React from "react";

const initialValue = {
  language: "",
  changeLanguage: (locale: string) => {},
  toggleLanguage: () => {}
};

export const LocaleContext = React.createContext(initialValue);
export const LocaleConsumer = LocaleContext.Consumer;

export class LocaleProvider extends React.Component {
  state = {
    language: "en"
  };

  public render() {
    return (
      <LocaleContext.Provider
        value={{
          ...this.state,
          changeLanguage: this.changeLanguage,
          toggleLanguage: this.toggleLanguage
        }}
      >
        {this.props.children}
      </LocaleContext.Provider>
    );
  }

  private changeLanguage = (language: string) => this.setState({ language });

  private toggleLanguage = () => {
    this.setState(({ language }: any) => ({
      language: language === "en" ? "km" : "en"
    }));
  };
}

export function withLocaleContext<C extends React.ComponentClass>(
  Component: C
): C {
  return (((props: any) => (
    <LocaleConsumer>
      {(locale: any) => <Component {...props} locale={locale} />}
    </LocaleConsumer>
  )) as any) as C;
}
