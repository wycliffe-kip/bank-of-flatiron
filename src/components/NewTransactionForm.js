import { useState } from "react"

function NewTransactionForm({ categories, onTransactionSubmit}) {
    const [transaction, setTransaction] = useState("")
    const [category, setCategory] = useState("code")

    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            date: transaction,
            category: category,
        }
        onTransactionSubmit(newTransaction)
        setTransaction("")
        setCategory("code")
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
            <input type="submit" value="Add Transaction" />
        </form>
    )

}
export default NewTransactionForm