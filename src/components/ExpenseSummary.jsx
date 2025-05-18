import React from 'react'

const ExpenseSummary = ({expenses}) => {
  const currentMonth = new Date().getMonth()
  const thisMonthExpenses = expenses.filter(
    e => new Date(e.date).getMonth() === currentMonth,
  )

  const total = thisMonthExpenses.reduce((sum, e) => sum + e.amount, 0)

  const byCategory = thisMonthExpenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount
    return acc
  }, {})

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Summary for this Month</h2>
      <p>Total Spent: ${total.toFixed(2)}</p>
      <ul className="list-disc ml-6">
        {Object.entries(byCategory).map(([cat, amt]) => (
          <li key={cat}>
            {cat}: ${amt.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseSummary
