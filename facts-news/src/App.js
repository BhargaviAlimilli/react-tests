import './App.css';
import Covin from './covid19/Covin';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import NavBar from './NavBar';
import Imager from './Image render/RenderImage';


const Home= ()=> <h1>Home</h1>
const welcome =()=> <h1> welcome to facts newss!!!!</h1>

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar}  />
        <Route exact path='/' component={welcome}  />

        <Route path='/home' component={Home} />
        <Route path='/covidnews' component={Covin} />
        <Route path='/images' component={Imager} />
        
      </div>
    </Router>
  );
}

export default App;

