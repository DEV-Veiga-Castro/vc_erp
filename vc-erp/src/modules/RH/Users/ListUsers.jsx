import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function ListUsers(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        setLoading(true);
        setError(null);

        const fetchUsers = async () => {
            try {
                const response = await api.get("/users");
                setUsers(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    
    })

    if (loading) {
        console.log("Carregando...")
    }

    if (error) {
        console.log("Erro ao carregar usuários:", error)
    }

    if (users.length === 0) {
        console.log("Nenhum usuário encontrado")
    }

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
    
}