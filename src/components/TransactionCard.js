import React from "react"

function TransactionCard({transaction}) {
    return (
        <div className="table"> 
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TransactionCard