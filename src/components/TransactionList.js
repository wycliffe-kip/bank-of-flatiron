import React from "react"
import TransactionCard from "./TransactionCard"

function TransactionList({transactionSearch}) {
    return (
        // Render an unordered list
        <ul>
            {transactionSearch.map((transaction) => {
                // Map over the transactionSearch array and render a TransactionCard component for each transaction in the array
                return <TransactionCard key={transaction.id} transaction={transaction} />
            })}
        </ul>
    )
}

export default TransactionList
