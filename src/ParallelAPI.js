import React,{ useEffect} from 'react';
// import axios from 'axios';

function ParallelApi() {
    // const [users, setUser] = useState([]);

    useEffect(()=>{
        const fetchData = async (url, delay) => {
            await new Promise(resolve => setTimeout(resolve, delay));
            
            try {
              const response = await fetch(url);
          
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            } catch (error) {
              // Handle fetch or parsing errors
              throw new Error(`Error during API call: ${error.message}`);
            }
          };
          
          const apiEndpoints = [
            { url: 'https://jsonplaceholder.typicode.com/users', delay: 5000 }, // 5 seconds
            { url: 'https://jsonplaceholder.typicode.com/todos', delay: 3000 }, // 3 seconds
            { url: 'https://jsonplaceholder.typicode.com/users', delay: 2000 }  // 2 seconds
          ];
          
          const performDelayedAPICalls = async () => {
            try {
              const results = await Promise.all(apiEndpoints.map(({ url, delay }) => fetchData(url, delay)));
          
              // Handle the results of all API calls here
              console.log('User:', results);
              console.log('Todos:', results);
              console.log('User:', results);
            } catch (error) {
              // Handle errors
              console.error(error.message);
            }
          };

          
          
          // Call the main function to start delayed API calls
          performDelayedAPICalls();
    },[]) // Empty dependency array ensures useEffect runs only once

    // return (
    //     <>
    //     <div>
    //         {/* {users.map((user) => */}
    //         <div key={users.id}>
    //             <div><img src={users.avatar_url} alt={users.login} width={80}/></div>
    //             <div>{users.name}</div>
    //             <div>{users.login}</div>
    //             <div>{users.location}</div>
    //         </div>
    //         {/* )} */}
    //     </div>
    //     </>
    // );
}

export default ParallelApi;