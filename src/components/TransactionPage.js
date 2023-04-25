import React, { useEffect, useState } from "react";
import NewTransactionForm from "./NewTransactionForm";
import TransactionList from "./TransactionList"
import Search from "./Search"

function TransactionPage() {
    const [transactionData, setTransactionData] = useState([]) // State for transaction data
    const [search, setSearch] = useState("") // State for search string

    // Fetch transaction data from API endpoint using useEffect
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then((transaction) => setTransactionData(transaction))
    }, [])

    // Function to add a new transaction to the list
    function addTransaction (newTransaction) {
        setTransactionData([...transactionData, newTransaction])
    }

    // Filter the transaction data based on the search string
    const visibleTransactions = transactionData.filter((transaction) => {
        return transaction.category && transaction.category.toLowerCase().includes(search.toLowerCase())
    })

    // Render the page with the new transaction form, search bar, and transaction list
    return (
        <main>
            <NewTransactionForm addTransaction={addTransaction} />
            <Search setSearch={setSearch} search={search}/>
            <TransactionList transactionSearch={visibleTransactions} />
        </main>
    );
}

export default TransactionPage;
