import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [deletedUsers, setdeletedUsers] = useState([]);

    useEffect(()=>{
        const responseUser = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const data = response.data;
                setUsers(data);
                console.log(data);
            } catch(error){
                console.log("Error Message:" , error);
            }
        }
        responseUser();
    },[])

    const handleDelete = (userId) => {
        const deletedUser = users.find((user) => user.id === userId);
        setdeletedUsers([...deletedUsers, deletedUser]);
        setUsers(users.filter((user) => user.id !== userId ));
    }

    return (
    
        <div>
            {users.map((user) => 
                <div key={user.id}>
                    <strong>Name:</strong> {user.name}<br/>
                    <strong>User Name:</strong> {user.username}<br/>
                    <strong>Email:</strong> {user.email}<br/>
                    <strong>Address:</strong> {user.address.street}<br/>
                    <strong>Company Name:</strong> {user.company.name}<br/>
                    <button onClick={()=>handleDelete(user.id)}>Delete</button><br/><br/>
                </div>
                
                )} 
        </div>
    );
}

export default Users;