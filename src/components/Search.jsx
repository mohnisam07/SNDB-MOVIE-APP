const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search-icon" />
        <input
         type="text"
         placeholder="Search Thousands of Movies"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         />
      </div>
    </div>
  )
}

export default Search