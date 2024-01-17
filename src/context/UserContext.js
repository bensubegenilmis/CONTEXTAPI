import { createContext, useContext , useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import axios from "axios";


const UserContext = createContext();

export const UserContextProvider = ({children}) => {

const [users, setUsers] = useState ([]);
const [loading, setLoading] = useState(true);
const[error, setError] = useState(null);

const loadData = () => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
};

const addUser = (data) => {
    setUsers((prev) => [{...data, id: uuidv4()}, ...prev]);
};

const removeUser = (id) => {
    const cloned = [...users];
    const index = cloned.findIndex((user) => user.id === id);
    
    cloned.splice(index,1);

    setUsers(cloned);
};

const values = {
    users,
    loading,
    error,
    addUser,
    removeUser,
    loadData,
};

return ( <UserContext.Provider value = {values}>{children}</UserContext.Provider>
    );
};

export const useUsers = () => {
    const context = useContext(UserContext);

    if(context === undefined){
        throw new Error('useUsers must be call inside UserContextProvider ');
 }

 return context;
};

