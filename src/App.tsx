import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  HomePage,
  RegisterPage,
  SignInPage,
  DetailPage,
  SearchPage,
} from "./pages";
import "./i18n/configs";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="/search/:keywords?" component={SearchPage}></Route>
          <Route render={() => <h1>not found 404 页面去火星了 !</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
