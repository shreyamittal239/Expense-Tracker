import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

     const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
   
   
    const handleSubmit= async (e) => {
        e.preventDefault();
          try {
         await login(formData);
        navigate("/dashboard");

    } catch (error) {
        console.log(error.response?.data);
    }
    }

    const navigate = useNavigate();

     
  return (
       
       <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-lg p-8 w-96">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Expense Tracker
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            }) 
                        }
                        className="w-full border p-3 rounded mb-4"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}

                         onChange={(e) =>
                         setFormData({
                           ...formData,
                           password: e.target.value,
                        })
                    }
                        className="w-full border p-3 rounded mb-4"
                    />

                    <button type='submit'
                        className="w-full bg-blue-600 text-white py-3 rounded"
                    >
                        Login
                    </button>
                   

                </form>
                

            </div>
       
    </div>
    
  )
}

export default Login;