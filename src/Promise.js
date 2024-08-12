import React, { useState, useEffect } from "react";


const API = () => {

    const [data, setData] = useState([]);
    // const [processedData, setprocessedData] = useState([]);

    const apiList = [
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian',
        'https://rickandmortyapi.com/api/character'
    ]
    const apiData = async(url) => {
        const response = await fetch(url);
        const data = response.data.json();
        setData(data);
        console.log(data);
    }

    const executeAllApi = async() => {
        const response = await Promise.all(apiList.map((url)=> apiData(url)));
        console.log(response);
    }

    useEffect(() => {
        executeAllApi();
    }, [])




    return ( 
        <div>
        <h5> Data </h5> 
        {data.map((item)=>(
            <div key={item.id}></div>
        ))}
        </div>
    )

}


export default API;