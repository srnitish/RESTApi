import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async(callback) => {
            try {
                // const response = await axios.get('https://api.github.com/users/srnitish');
                // const data = response.data;
                // setUsers(data);
                // callback(); 
                // console.log(data);
                const response = await fetch('https://api.github.com/users/srnitish');
                const result = await response.json();
                setUsers(result.data);
                console.log(data);
                setLoading(false)

            } catch (error) {
                console.log(error);
            }
        }

        const delay = 5000;
        const showDataWithDelay = setTimeout(fetchData, delay, sayHello);
        return () => clearTimeout(showDataWithDelay);

        function sayHello() {
            console.log("hello");
        }
        // fetchData();
    }, []);

    if (loading) {
        return <div><center> Loading.... </center></div>
    }


    return ( 
        <div> {users.map((user) => <div key = { user.id } > { user.name } </div> )} </div>
    )
}
export default FetchUser;