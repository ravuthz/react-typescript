import * as React from "react";

import { withAppContext } from "../context";

export interface HomePageProps {}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <h1>Welcome to HomePage component</h1>;
  }
}

export default withAppContext(HomePage);
