import React, { useState, useEffect } from 'react';
import './App.css';
import Transaction from './components/Transaction';
import CategoryFilter from './components/CategoryFilter';
import NewTransactionForm from './components/NewTransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = ["Food", "Income", "Entertainment"]


  const filteredTransactions = 
    selectedCategory === ""
    ? transactions 
    : transactions.filter(transaction => transaction.category === selectedCategory)

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <CategoryFilter
        categories={categories}
        onSelectCategory={category => setSelectedCategory(category)} />
      <Transaction transactions={filteredTransactions} />
      <TransactionList transactions={filteredTransactions} />
      <NewTransactionForm 
        categories={categories}
        onTransactionSubmit={transaction => setTransactions([...transactions, transaction])}
      />
    </div>
  );
}

export default App;
