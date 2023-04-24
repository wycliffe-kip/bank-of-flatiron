import React, {useState} from "react";

function NewTransactionForm({addTransaction}) {
    const [fetchedData, setFetchedData] = useState({
        date: "",
        description: "",
        amount: "",
    })


    function onSubmit (e) {
        e.preventDefault() 
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(fetchedData)
        })
        .then(res => res.json())
        .then((newTransaction) => {
            addTransaction(newTransaction)
            console.log(fetchedData)
            setFetchedData({
            date: "",
            description: "",
            category: "",
            amount: "",
        })
        })
    }

    function handleChange (e) {
        setFetchedData({...fetchedData, [e.target.name] : e.target.value})
    }

    return (
        <div className="new-transaction-form">
            <h2>Add Transaction</h2>
            <form onSubmit={onSubmit}>
                <input 
                    type="date" 
                    name="date" 
                    value={fetchedData.date} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="description" 
                    value={fetchedData.description} 
                    onChange={handleChange} 
                />
                <input
                    type="text"
                    name="category"
                    placeholder="category"
                    value={fetchedData.category}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="amount" 
                    placeholder="amount" 
                    value={fetchedData.amount} 
                    onChange={handleChange} 
                />
                <button type="submit" >Add Transaction</button>
                
            </form>
        </div>
    )
}
export default NewTransactionForm