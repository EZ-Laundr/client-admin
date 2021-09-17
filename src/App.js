import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
