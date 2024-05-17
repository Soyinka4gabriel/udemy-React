import Home from './Home';
import Navbar from './Navbar';
import Books from './Book';
import Lib from './Lib';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <h1>Wlecome to my webapp</h1>
      <Home/>
      <br/>
      <br/>
      <Lib/>
      <br/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <Books/>
      <Counter/>
    </div>
  );
}

export default App;
