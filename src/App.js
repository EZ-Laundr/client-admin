import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Services from './pages/Services/Service'
import AddService from './pages/Services/AddService'
import EditService from './pages/Services/EditService'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/services/add">
            <AddService />
          </Route>
          <Route exact path="/services/edit/:id">
            <EditService />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
