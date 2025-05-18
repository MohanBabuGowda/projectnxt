import React from 'react'

const FilterBar = ({
  filter,
  setFilter,
  search,
  setSearch,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="input"
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="input"
      />

      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className="input"
      >
        <option value="date-desc">Date ↓</option>
        <option value="date-asc">Date ↑</option>
        <option value="amount-desc">Amount ↓</option>
        <option value="amount-asc">Amount ↑</option>
      </select>
    </div>
  )
}

export default FilterBar
