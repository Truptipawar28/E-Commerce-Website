import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <NavigationBar />
      <main>
       <ProductPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
