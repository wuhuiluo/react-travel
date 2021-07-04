import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  HomePage,
  RegisterPage,
  SignInPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
  PlaceOrderPage,
} from "./pages";
import "./i18n/configs";
import { useDispatch } from "react-redux";
import { getShoppingCart } from "./redux/shoppingCart/slice";
import { useSelector } from "./redux/hooks";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    );
  };
  return <Route render={routeComponent} {...rest}></Route>;
};

function App() {
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [jwt]);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="/search/:keywords?" component={SearchPage}></Route>
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCartPage}
          />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/placeOrder"
            component={PlaceOrderPage}
          />
          <Route render={() => <h1>not found 404 页面去火星了 !</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
