import { useState } from "react"

function NewTransactionForm({ categories, onTransactionSubmit}) {
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("code")

    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            date: date,
            category: category,
            amount: amount,
        }
        onTransactionSubmit(newTransaction)
        setDate("")
        setCategory("code")
        setAmount(0)
    }

    return (
        <form className="new-transaction-form" onSubmit={handleSubmit}>
            <label>
                Date
                <input type="date" name="text" value={transaction} onChange={(e) => setTransaction(e.target.value)} /> 
            </label>
            <label>
                Description
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Amount
                <input type="number" value={transaction.amount} onChange={(e) => setTransaction(e.target.value)} />
            </label>
            <input type="submit" value="Add Transaction" />
        </form>
    )

}
export default NewTransactionForm