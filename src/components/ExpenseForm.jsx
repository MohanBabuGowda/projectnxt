import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const ExpenseForm = ({onAdd}) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [date, setDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !amount || !date || isNaN(amount)) {
      alert('Please fill out all fields correctly.')
      return
    }
    onAdd({
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    })
    setTitle('')
    setAmount('')
    setCategory('Food')
    setDate('')
    alert('Expense added successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="input"
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="input"
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Entertainment</option>
        <option>Others</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="input"
      />
      <button className="btn">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
