import Header from './HeaderComponent'
import Main from './MainComponent'
import Footer from './FooterComponent'
import CV from './CVComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//<Header />
//      <Main />                            
//      <Footer />
function App() {
  return (
    <Router>
  <Switch>
    <Route path="/en/home">
       <div>
        <Header />
        <Main />
        <Footer />
       </div>
    </Route>
    <Route path="/en/manik">
        <Header />
        <CV id="1" />
        <Footer />
    </Route>
  </Switch>
    </Router>

  )
}

function home(){
  return(
    <div>
  <Header />
  <Main />
  <Footer />
  </div>
  )
}

export default App
