import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Form from "./components/Form";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 75,
      category: "utilities",
    },
    {
      id: 3,
      description: "Movie Tickets",
      amount: 30,
      category: "entertainment",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
            },
          ])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => {
          console.log("Selected category:", category);
          setSelectedCategory(category);
        }}
      />

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          console.log("Delete expense with id:", id);
          setExpenses(expenses.filter((expense) => expense.id !== id));
        }}
      />
    </div>
  );
}

export default App;
