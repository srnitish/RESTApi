import React, {useEffect, useState} from 'react';
import axios from 'axios';


function RealUser() {
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
                    // Handle 404 status code
                    setError(`Error: ${response.status} - ${response.statusText}`);
                  }
            }catch(error){
                // console.log("Error Message:", error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.log("Data Response", error.response.data);
                    console.log("Response Status", error.response.status);
                    console.log("Header",error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    console.log("Error Request",error.request);
                  } else {
                    // Something happened in setting up the request that triggered an error
                    console.log('Error Message', error.message);
                  }
                  console.log("Error Config", error.config);
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
        
        <div>
            <ul>
            {users.map((user) => 
            <li key={user.id}>{user.name}</li>
            )}
            </ul>
        </div>
        
    );
}

export default RealUser;