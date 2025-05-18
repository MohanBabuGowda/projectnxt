// App.jsx
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import FilterBar from './components/FilterBar';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');

  useEffect(() => {
    const data = localStorage.getItem('expenses');
    if (data) setExpenses(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([expense, ...expenses]);

  const deleteExpense = (id) =>
    setExpenses(expenses.filter((exp) => exp.id !== id));

  const updateExpense = (updated) => {
    setExpenses(
      expenses.map((exp) => (exp.id === updated.id ? updated : exp))
    );
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        filter={filter}
        search={search}
        sortBy={sortBy}
        onDelete={deleteExpense}
        onUpdate={updateExpense}
      />
    </div>
  );
};

export default App;
