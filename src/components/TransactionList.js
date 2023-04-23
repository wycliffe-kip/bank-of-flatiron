import React from "react";
import Transaction from "./Transaction";

function TransactionList ( {transactions, onDelete} ) {
    return (
        <div className="transactions">
            {transactions.map((transaction) => (
                <Transaction key={transaction.text} onDelete={onDelete} />
            ))}

        </div>
    )
}
export default TransactionList