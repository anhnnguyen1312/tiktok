import logo from './logo.svg';
import './App.css';
// import Button from './components/Button';
import Button from './components/Button'
function App() {
  
function arrToObj(arr) {
  return arr.reduce((obj,vals) => {
    console.log("obj",obj)
    console.log("vals",vals)

    obj[vals[0]] = vals[1];
     return obj;
  }, {});
  
  }

  const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])
 console.log(obj1)

  // const obj2 = [
  //     ['name', 'Son Dang'], 
  //     ['age', 21], 
  //     ['address', 'Ha Noi']
  //  ]
  //  const obj4={}
  //  const obj3 = ['ten', 'son', 'tuoi', 21]
  //  obj4.obj3[0]= obj3[1];
  //  console.log(obj4)
  //  console.log(obj1)
  //  const obj2= obj1[0]
  //  console.log("obj1[0].name",obj2)
  //  console.log("obj2[0]",obj1[0][0])
  // Expected results:
  /**
  const obj1 = arrToObj([
     ['name', 'Son Dang'], 
     ['age', 21], 
     ['address', 'Ha Noi']
  ])
  console.log(obj1)
  Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
  
  const obj2 = arrToObj([
     ['name', 'Duc Long'], 
     ['age', 18], 
     ['address', 'Ha Noi']
  ])
  console.log(obj2)
  Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button/>
      </header>
    </div>
  );
}

export default App;
