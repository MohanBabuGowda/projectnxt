import React, {useState} from 'react'

const ExpenseCard = ({expense, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(expense.title)
  const [amount, setAmount] = useState(expense.amount)

  const handleSave = () => {
    if (!title || isNaN(amount)) {
      alert('Invalid input')
      return
    }
    onUpdate({...expense, title, amount: parseFloat(amount)})
    setIsEditing(false)
    alert('Expense updated successfully!')
  }

  return (
    <div className="p-4 border rounded-md flex justify-between items-center">
      <div>
        {isEditing ? (
          <>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="input inline"
            />
            <input
              value={amount}
              onChange={e => setAmount(e.target.value)}
              type="number"
              className="input inline"
            />
          </>
        ) : (
          <>
            <p className="font-bold">
              {expense.title} - ${expense.amount}
            </p>
            <p className="text-sm text-gray-600">
              {expense.category} | {expense.date}
            </p>
          </>
        )}
      </div>
      <div className="space-x-2">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="btn-sm">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn-sm">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="btn-sm">
              Edit
            </button>
            <button onClick={() => onDelete(expense.id)} className="btn-sm">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ExpenseCard
