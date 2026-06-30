import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        category: "",
        note: "",
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

    setLoading(true);

        try {

            await api.post("/expenses/addExpense", formData);

            navigate("/dashboard");

        } catch (error) {

            console.log(error.response?.data);

        } finally {

        setLoading(false);

    }

    };

    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">
                Add Expense
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow space-y-4"
            >

                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            title: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            amount: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <select
                    value={formData.category}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            category: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                >
                    <option value="">Select Category</option>
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Shopping</option>
                    <option>Bills</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Education</option>
                    <option>Other</option>
                </select>

                <textarea
                    placeholder="Note"
                    value={formData.note}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            note: e.target.value,
                        })
                    }
                    className="w-full border p-3 rounded"
                />

                <button
                   disabled={loading}
    className="bg-blue-600 text-white px-6 py-3 rounded"
>
    {loading ? "Adding..." : "Add Expense"}
                </button>

            </form>

        </DashboardLayout>

    );
};

export default AddExpense;