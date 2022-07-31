import logo from './logo.svg';
import './style/main.scss';
import Hero_section from './components/Hero_section';
import Design_tools from './components/Design_tools';
import Design_professional from './components/Design_professional';
import Product_manager from './components/Product_manager';
import Markets from './components/Markets';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Hero_section />
        <Design_tools />
        <Design_professional />
        <Product_manager />
        <Markets />
      </main>
    </div>
  );
}

export default App;
