import React from 'react'
import ExpenseCard from './ExpenseCard'

const ExpenseList = ({
  expenses,
  filter,
  search,
  sortBy,
  onDelete,
  onUpdate,
}) => {
  let filtered = expenses.filter(
    exp =>
      (filter === 'All' || exp.category === filter) &&
      (exp.title.toLowerCase().includes(search.toLowerCase()) ||
        exp.category.toLowerCase().includes(search.toLowerCase())),
  )

  if (sortBy === 'amount-asc') filtered.sort((a, b) => a.amount - b.amount)
  if (sortBy === 'amount-desc') filtered.sort((a, b) => b.amount - a.amount)
  if (sortBy === 'date-asc')
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
  if (sortBy === 'date-desc')
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date))

  return filtered.length === 0 ? (
    <p className="text-center text-gray-500">No expenses found.</p>
  ) : (
    <div className="space-y-4">
      {filtered.map(exp => (
        <ExpenseCard
          key={exp.id}
          expense={exp}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default ExpenseList
