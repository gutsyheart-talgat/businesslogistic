import './App.scss';
import First from './components/first';
import Fourth from './components/fourth';
import Second from './components/second';
import Third from './components/third';
import Fifth from './components/fifth';
import Seventh from './components/seventh';
import Footer from './components/footer';
import Eigth from './components/eigth';
import Sixth from './components/sixth';
import React, {useRef} from 'react';
function App() {

  let seventh = useRef()
  let second = useRef()
  let third = useRef()
  let sixth = useRef()
  let fifth = useRef()
  
  return (
    <div className="App">
      <First second={second} third={third} fifth={fifth} sixth={sixth} seventh={seventh}/>
      <Second ref={second}/>
      <Third ref={third}/>
      <Fourth/>
      <Fifth ref={fifth}/>
      <Sixth ref={sixth}/>
      <Seventh ref={seventh}/>
      <Eigth/>
      <Footer />
    </div>
  );
}

export default App;
