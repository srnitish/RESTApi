import React, { useState } from 'react';

function PostComponent() {
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

    const url = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data posted successfully:', data);
        setPostedData(data); // Update state with posted data
        setPostData({ title: '', body: '' }); // Clear form fields
        setError(null); // Clear any previous errors
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

export default PostComponent;