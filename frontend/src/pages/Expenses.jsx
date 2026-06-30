import React from 'react'
import DashboardLayout from '../layouts/DashBoardLayout'
import { useEffect , useState } from 'react'
import api from '../services/api'
import { useNavigate } from "react-router-dom";

const Expenses = () => {
    const navigate = useNavigate();
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {

        try {

            const response = await api.get("/expenses");

            setExpenses(response.data.expenses);

        } catch (error) {

            console.log(error.response?.data);

        }

    };

    const deleteExpense = async (id) => {
        try {
            await api.delete(`expenses/${id}`);
            fetchExpenses();
        }
        catch (error){
            console.log(error.response?.data);
        }
    }

    useEffect(() => {
        fetchExpenses();
    }, []);

  return (
    <DashboardLayout>

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                All Expenses
            </h1>

            <table className="w-full border-collapse bg-white shadow rounded">

                <thead>

                    <tr className="bg-gray-100">

                        <th className="p-3 text-left">Title</th>
                        <th className="p-3 text-left">Category</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        expenses.map((expense) => (

                            <tr
                                key={expense._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {expense.title}
                                </td>

                                <td className="p-3">
                                    {expense.category}
                                </td>

                                <td className="p-3">
                                    ₹ {expense.amount}
                                </td>

                                <td className="p-3">
                                    {new Date(expense.date).toLocaleDateString()}
                                </td>

                                <td className="p-3 text-center">

                                    <button
                                    onClick={() => navigate(`/edit-expense/${expense._id}`)}
                                     className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                                        Edit
                                    </button>

                                    <button
                                     onClick={() => deleteExpense(expense._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    </DashboardLayout>
);
};

export default Expenses