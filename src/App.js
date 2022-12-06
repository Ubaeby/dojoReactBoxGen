import { useState } from 'react';
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import BoxForm from './components/BoxForm.jsx';
// import BoxDisplay from './components/BoxDisplay';

function App() {

  const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (

    <div className="App">
    <BoxForm 
      boxColorArray={ boxColorArray} setBoxColorArray = {setBoxColorArray}
    />
    <BoxDisplay boxColorArray = { boxColorArray } />
    </div>

  );
}

export default App;
