import Header from "./Components/Header";
import Main from "./Components/Main";
import Basket from "./Components/Basket";
import data from "./data";


function App() {
  const {products}=data;
  return (
    <div className="App">
      <Header> </Header>
        <div className='row'>
           <Main products={products}></Main> 

          <Basket></Basket>
        </div>
     
       
     
    </div>
  );
}

export default App;
