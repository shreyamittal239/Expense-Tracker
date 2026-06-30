import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        await api.post("/auth/register", formData);

        navigate("/login");

    } catch (error) {

        console.log(error.response?.data);

    }

};

    return (
        <div>
            <form onSubmit={handleSubmit}>

    <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
            setFormData({
                ...formData,
                name: e.target.value,
            })
        }
    />

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
    />

    <button type="submit">

        Register

    </button>


    <p className="text-center mt-4">

    Already have an account?

    <button
        type="button"
        onClick={() => navigate("/login")}
        className="text-blue-600 ml-1"
    >
        Login
    </button>

</p>

</form>
        </div>
    );
};

export default Register;