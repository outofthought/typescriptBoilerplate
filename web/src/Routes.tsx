import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginView } from "./modules/user/LoginView";
import { RegisterView } from "./modules/user/RegisterView";
// import { MeView } from "./modules/user/MeView";
// import SubscribeUser from "../src/modules/account/SubscribeUser";
import { Account } from "../src/modules/account/Account";
import PaidUsers from "././modules/account/PaidUsers";
import Header from "./shared/Header";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={LoginView} />
            <Route
              path="/"
              render={() => (
                <React.Fragment>
                  <Header />
                  <div>
                    <Route path="/register" component={RegisterView} />
                    {/* <Route path="/me" component={MeView} /> */}
                    <Route path="/account" component={Account} />
                    <Route path="/paid-users" component={PaidUsers} />
                    <Route
                      exact={true}
                      path="/"
                      render={() => <div>homepage</div>}
                    />
                  </div>
                </React.Fragment>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
