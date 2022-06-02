import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import NavMenu from "../components/NavMenu";
import Footer from "./Footer";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <Navbar />
            <ProductPage />
          </Route>
          <Route path="/products">
            {/* <Navbar /> */}
            <HomePage />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
