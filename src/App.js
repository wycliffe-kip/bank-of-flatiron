import React, { useState, useEffect } from 'react';
import './App.css';
import Transaction from './components/Transaction';
import CategoryFilter from './components/CategoryFilter';
import NewTransactionForm from './components/NewTransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Food", "Income", "Entertainment"];

  const filteredTransactions =
    selectedCategory === ""
      ? transactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : transactions.filter(
          (transaction) =>
            transaction.category === selectedCategory.toUpperCase() &&
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleTransactionSubmit = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <CategoryFilter
        categories={categories}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Transactions"
      />
      <Transaction transactions={filteredTransactions} />
      <TransactionList transactions={filteredTransactions} />
      <NewTransactionForm
        categories={categories}
        onTransactionSubmit={handleTransactionSubmit}
      />
    </div>
  );
}

export default App;
