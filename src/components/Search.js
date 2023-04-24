import React from "react";


function Search({search, setSearch}) {
    return (
        <div className="infput-form">
            <label htmlFor="search">Search by category:</label>
            <input
            value={search}
            type="text"
            id="search"
            placeholder="category"
            onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    )
}
export default Search
