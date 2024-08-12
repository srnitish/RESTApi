import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Gitapi() {
    const [users, setUser] = useState([]);
    let cancelToken;

if(typeof cancelToken != typeof undefined){
    cancelToken.cancel("Cancelling the previos request");
}

cancelToken = axios.CancelToken.source();

    useEffect(()=>{
        const fetchData = async(callback) =>{
            try{
                const response = await axios.get("https://api.github.com/users/srnitish");
                const result = response.data;
                setUser(result);
                console.log(result);
                callback();
            }
            catch(error){
                console.log("Error Message:", error);
            }
        }
        const delay = 10000;

        const fetchDataWithDelay = setTimeout(fetchData, delay, sayHello);

        return()=> clearTimeout(fetchDataWithDelay); // Cleanup function to clear the timeout if the component unmounts.
        
        function sayHello(){
            alert("Data is now fetched!!");
        }
    
    },[]) // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <div key={users.id}>
                <div><img src={users.avatar_url} alt={users.login} width={80}/></div>
                <div>{users.name}</div>
                <div>{users.login}</div>
                <div>{users.location}</div>
            </div>
        </div>
    );
}

export default Gitapi;