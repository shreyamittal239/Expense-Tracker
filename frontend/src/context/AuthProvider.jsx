
import { createContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ( {children}) => {

    const [user , setUser] = useState(null);
     
    const login = async (formData) => {

        const response = await api.post("/auth/login", formData);

        setUser(response.data.user);

        return response.data;
    };

    return ( 
        <AuthContext.Provider 
         value= { {
            user,
            setUser,
            login,
         }}>
          { children }
        </AuthContext.Provider>
    )
} ;

export { AuthProvider };
export default AuthContext;