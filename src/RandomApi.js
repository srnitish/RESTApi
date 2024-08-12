import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api');
        const data = response.data.results;
        console.log(data);
        setDatas(data);
      } catch (error) {
        console.log('Error is', error);
      }
    };
    fetchResult();
  }, []);

  return (
    <div>
      <ul>
        {datas.map((data) => 
          <li key={data.id.value}>
          <span> <img src={data.picture.medium} alt={data.name}/></span><br/>
          {data.name.title} {data.name.first}<br/>
          UserName: {data.login.username}<br/>
          Gender: {data.gender}<br/>
          </li>
          
        )}
      </ul>
    </div>
  );
};

export default FetchData;
