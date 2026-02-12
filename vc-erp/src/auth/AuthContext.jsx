import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Carrega a sessão salva
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser){
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            api.defaults.headers.Authorization = `Bearer ${storedToken}`;
        }

        setLoading(false);
    }, []);

    async function login(username, password) {
        const response = await api.post("/auth/login", { username, password });

        const { acess_token } = response.data;

        if (acess_token){
            localStorage.setItem("token", acess_token);
            api.defaults.headers.Authorization = `Bearer ${acess_token}`;   
        }

        const userResponse = await api.get("/users/me");
        
        const { user } = userResponse.data;

        if (user){
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        }
        
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        delete api.defaults.headers.Authorization;
    }

    // Verificar permissão
    // O Retorno das permissões do usuário é: 
    // permissions: [
    //     {
    //         "id": "1",
    //         "chave": "PEDIDO_RETIRADA"
    //     }
    // ]
    async function hasPermission(permission) {
        if (!user?.permissions) return false;
        return user.permissions.map(p => p.chave).includes(permission);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                hasPermission,
                loading,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}