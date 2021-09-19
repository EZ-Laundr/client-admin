import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Service from './pages/Services/Service'
import AddService from './pages/Services/AddService'
import EditService from './pages/Services/EditService'
import Perfume from './pages/Perfumes/Perfume'
import AddPerfume from './pages/Perfumes/AddPerfume'
import EditPerfume from './pages/Perfumes/EditPerfume'
import Special from './pages/Specials/Special'
import AddSpecial from './pages/Specials/AddSpecial'
import EditSpecial from './pages/Specials/EditSpecial'
import Detail from './pages/Detail'
import Qr from './pages/Qr'
import { Provider } from 'react-redux'
import store from './store'
import ChatRooms from './pages/ChatRooms'


export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/chat">
              <ChatRooms />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/services">
              <Service />
            </Route>
            <Route exact path="/services/add">
              <AddService />
            </Route>
            <Route exact path="/services/edit/:id">
              <EditService />
            </Route>
            <Route exact path="/perfumes">
              <Perfume />
            </Route>
            <Route exact path="/perfumes/add">
              <AddPerfume />
            </Route>
            <Route exact path="/perfumes/edit/:id">
              <EditPerfume />
            </Route>
            <Route exact path="/specials">
              <Special />
            </Route>
            <Route exact path="/specials/add">
              <AddSpecial />
            </Route>
            <Route exact path="/specials/edit/:id">
              <EditSpecial />
            </Route>
            <Route exact path="/detail/:id">
              <Detail />
            </Route>
            <Route exact path="/qr">
              <Qr />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}
