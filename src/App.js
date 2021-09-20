import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import { useEffect, useState } from 'react'


export default function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [])

  function changeLogin(payload) {
    setIsLogin(payload)
  }

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => {
              return <Home isLogin={isLogin} changeLogin={changeLogin} />
            }}
            />
            <Route exact path="/login" component={() => {
              return <Login isLogin={isLogin} changeLogin={changeLogin} />
            }} />

            <Route exact path="/detail/:id" component={() => {
              return <Detail changeLogin={changeLogin} />
            }} />

            <Route exact path="/services" component={() => {
              return <Service changeLogin={changeLogin} />
            }} />

            <Route exact path="/services/add" component={() => {
              return <AddService changeLogin={changeLogin} />
            }} />

            <Route exact path="/services/edit/:id" component={() => {
              return <EditService changeLogin={changeLogin} />
            }} />

            <Route exact path="/perfumes" component={() => {
              return <Perfume changeLogin={changeLogin} />
            }} />

            <Route exact path="/perfumes/add" component={() => {
              return <AddPerfume changeLogin={changeLogin} />
            }} />

            <Route exact path="/perfumes/edit/:id" component={() => {
              return <EditPerfume changeLogin={changeLogin} />
            }} />

            <Route exact path="/specials" component={() => {
              return <Special changeLogin={changeLogin} />
            }} />

            <Route exact path="/specials/add" component={() => {
              return <AddSpecial changeLogin={changeLogin} />
            }} />

            <Route exact path="/specials/edit/:id" component={() => {
              return <EditSpecial changeLogin={changeLogin} />
            }} />

            <Route exact path="/qr" component={() => {
              return <Qr changeLogin={changeLogin} />
            }} />

            <Route exact path="/chat" component={() => {
              return <ChatRooms changeLogin={changeLogin} />
            }} />

          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}
