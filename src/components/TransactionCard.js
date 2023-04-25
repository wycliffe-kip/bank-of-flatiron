// Import the React library, which is required to use JSX syntax
import React from "react";

// Declare the TransactionCard component as a function that takes in a "transaction" prop
function TransactionCard({transaction}) {

    // Render the component's UI using JSX syntax
    return (
        <div className="table"> 
        
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Use the "key" prop to give each transaction row a unique identifier */}
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

// Export the TransactionCard component so it can be used in other files
export default TransactionCard;
