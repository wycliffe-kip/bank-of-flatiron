import React, { useEffect, useState } from "react";

function Transaction({}) {
    const [transactionList, setTransactionList] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((res) => res.json())
        .then((data) => setTransactionList(data))
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
                    {transactionList.map(transaction => (
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