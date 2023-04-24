import React from "react"
import TransactionCard from "./TransactionCard"

function TransactionList({transactionSearch}) {
    return (
        <ul>{transactionSearch.map((transaction) => {
                return <TransactionCard key={transaction.id} transaction={transaction} />
            }
        )}
        </ul>
    )
}
export default TransactionList
