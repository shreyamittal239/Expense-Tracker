import { Routes , Route } from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import ExpenseCard from "./components/ExpenseCard";
import SplitExpense from "./pages/SplitExpense";
import NotFound from "./pages/NotFound";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";





function App() {
   return (
  
 
   <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/add-expense" element={<AddExpense />} />
      <Route path="/split-expense" element={<SplitExpense />} />
      <Route path="/edit-expense/:id" element={<EditExpense />} />
      

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
   
    
  )
}

export default App
