import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import Employee from './pages/Employee'

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Employee />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
