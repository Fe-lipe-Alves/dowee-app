import React, { useState, useContext, createContext } from "react"; 

const userContext = createContext();

export default function UserProvider({children}) {
    const [user, setUser] = useState({
        name: null,
        email: null,
        password: null,
        logged: false,
        image: null,
        id: 0
    })

    return (
        <userContext.Provider value={{ user, setUser }}>
            { children }
        </userContext.Provider>
    )
}

export function useUser() {
    const context = useContext(userContext)
    const { user, setUser } = context
    return { user, setUser }
}