import '../App.css';
import '../footer.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import Contact from './Contact';
import JokeFun from './joke';
import Product from './product';


function App() {
  return (
    <div className="App">
      <Product />
      <JokeFun />
      <Contact />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
