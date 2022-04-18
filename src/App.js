import './App.scss';
import Product from './components/Product';
import Navbar from './components/Navbar';
import { Button } from './components/Button';

function App() {
  return (
    <div>
      <Navbar />
      <Product />
      <Button 
      onClick={() => {console.log('Button was clicked')}} type={"button"}
      buttonStyle={'btn--secondary-default'}
      buttonSize={'btn--full'}
      >Add to cart</Button>
    </div>
  );
}

export default App;
