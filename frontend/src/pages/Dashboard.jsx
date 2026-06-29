import React from 'react'
import DashboardLayout from '../layouts/DashBoardLayout'
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { useEffect, useState } from "react";
import api from "../services/api";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {

         const fetchDashboard = async () => {

        try {

            const response = await api.get("/dashboard");
            console.log(response.data);

            setDashboardData(response.data);

        } catch (error) {

            console.log(error.response?.data);

        }

    };

    fetchDashboard();
    } , []);

  return (
    <DashboardLayout>
        
        <div className="p-6">

    <h1 className="text-3xl font-bold mb-6">
        Welcome {user?.name}
    </h1>

       </div>

       <div className="grid grid-cols-2 gap-5">

    <div className="bg-white shadow rounded p-5">

        <h2>Total Expense</h2>

        <p className="text-3xl font-bold">

            ₹ {dashboardData?.totalExpense}

        </p>

    </div>

    <div className="bg-white shadow rounded p-5">

        <h2>Total Transactions</h2>
    
        <p className="text-3xl font-bold">

            {dashboardData?.totalTransactions}

        </p>


    </div>


    
             
</div>

 <h2 className="text-2xl font-bold mt-10 mb-5">
    Recent Expenses
        </h2>

        <div className="bg-white shadow rounded-lg p-5">

    {
        dashboardData?.recentExpenses?.length > 0 ? (

            dashboardData.recentExpenses.map((expense) => (

                <div
                    key={expense._id}
                    className="flex justify-between items-center border-b py-3"
                >

                    <div>

                        <h3 className="font-semibold">
                            {expense.title}
                        </h3>

                        <p className="text-gray-500 text-sm">
                            {expense.category}
                        </p>

                        <p className="text-gray-500 text-sm">
    {new Date(expense.date).toLocaleDateString()}
</p>

                    </div>

                    <div className="text-right">

                        <p className="font-bold text-red-500">
                            ₹ {expense.amount}
                        </p>

                    </div>

                </div>

            ))

        ) : (

            <p>No expenses found.</p>

        )
    }

</div>
       
         </DashboardLayout>
  )
}

export default Dashboard;