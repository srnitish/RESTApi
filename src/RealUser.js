import React,{useEffect, useState} from 'react';
import axios from 'axios';


function Api() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const mainFunction = async () =>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                if(response.status === 200){
                    const data = response.data;
                    console.log(data);
                    setUsers(data);
                    setLoading(false);
                }else {
                    // Handle non-200 status code
                    setError(`Error: ${response.status} - ${response.statusText}`);
                  }
            }catch(error){
                console.log("Error Message:", error);
            }
        }
        mainFunction();
    },[])

    if (loading) {
        return <div><center>Loading...</center></div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

    return (
        <>
        <div>
            <ul>
            {users.map((user) => 
            <li key={user.id}>{user.name}</li>
            )}
            </ul>
        </div>
        </>
    );
}

export default Api;