
import './App.css';
import React from "react";
import TransactionPage from './components/TransactionPage';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionPage />
      <Search />
    </div>
  );
}

export default App;
