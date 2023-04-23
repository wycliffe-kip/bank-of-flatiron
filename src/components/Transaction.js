import React, { useEffect, useState } from "react";

function Transaction() {
    const [transactions, setTransactions] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((res) => res.json())
        .then((data) => setTransactions(data))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <h2> Transactions </h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Transaction