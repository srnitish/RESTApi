import React, { useState } from 'react';

function MyComponent() {
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });

  const [postedData, setPostedData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint for initial POST
    const updateUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint for updating the post

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    };

    fetch(postUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}, ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data posted successfully:', data);
        setPostedData(data); // Update state with posted data

        // Make another request to update the API
        const updatedData = {
          ...data, // Include existing data
          updatedField: 'updatedValue' // Add/update fields as needed
        };
        const updateOptions = {
          method: 'PUT', // or 'PATCH' depending on your API
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData)
        };
        return fetch(`${updateUrl}/${data.id}`, updateOptions);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Update request failed with status ${response.status}: ${response.statusText}`);
        }
        console.log('API updated successfully');
        // Handle any further operations if needed
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message); // Set error state
      });
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {postedData && (
        <div>
          <p>Data posted successfully!</p>
          <p>Title: {postedData.title}</p>
          <p>Body: {postedData.body}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            name="title" 
            value={postData.title} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Body:
          <input 
            type="text" 
            name="body" 
            value={postData.body} 
            onChange={handleChange} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyComponent;
