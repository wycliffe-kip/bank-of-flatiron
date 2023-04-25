import React from "react";

// Declare the Search component as a function that takes in a "search" and "setSearch" prop
function Search({search, setSearch}) {

    // Render the component's UI using JSX syntax
    return (
        <div className="input-form">
            {/* Label for the search input */}
            <label htmlFor="search">Search by category:</label>

            {/* Input field for the search */}
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

export default Search;


