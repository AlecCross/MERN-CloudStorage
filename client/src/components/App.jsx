import Navbar from "./navbar/Navbar"
// import Navbar from "./index"
import './app.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth())
  })

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth ?
            <Switch>
              <Route path="/registration" ><Registration /></Route>
              <Route path="/login"><Login /></Route>
              <Redirect to="/login" />
            </Switch>
            :
            <Switch>
              {/* Параметр exact отключает частичное совпадение для маршрута и гарантирует, что он возвращает маршрут только в том случае, если путь EXACT совпадает с текущим url. */}
              <Route exact path="/" ><Disk /></Route>
              <Redirect to="/" />
            </Switch>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
