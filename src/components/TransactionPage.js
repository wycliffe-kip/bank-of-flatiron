import React, { useEffect, useState } from "react";
import NewTransactionForm from "./NewTransactionForm";
import TransactionList from "./TransactionList"
import Search from "./Search"

function TransactionPage() {
    const [transactionData, setTransactionData] = useState([])
    const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then((transaction) => setTransactionData(transaction))
  }, [])

  function addTransaction (newTransaction) {
    setTransactionData([...transactionData, newTransaction])
  }

  const visibleTransactions = transactionData.filter((transaction) => {
    return transaction.category && transaction.category.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
        <NewTransactionForm addTransaction={addTransaction} />
        <Search setSearch={setSearch} search={search}/>
        <TransactionList transactionSearch={visibleTransactions} />
    </main>
  );
}

export default TransactionPage;