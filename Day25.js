// Write a function getData that returns a Promise. 
// Use this function to fetch data from two different APIs sequentially, 
// and return the combined result.
// Use any random API that you want
// Solution Approach:
// Utilize the .then method to chain promises.

function fetchDataFromApi(apiUrl) {
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${apiUrl}`);
        }
        return response.json();
      });
  }
  
  function getData() {
    const apiUrl1 = 'https://poetrydb.org/title/Ozymandias/lines.json';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/todos/1';
  
    // Fetch data from the first API
    return fetchDataFromApi(apiUrl1)
      .then(data1 => {
        // Fetch data from the second API after the first one is done
        return fetchDataFromApi(apiUrl2)
          .then(data2 => {
            // Combine the results from both APIs
            return { data1, data2 };
          });
      });
  }
  
  // Example usage:
  getData()
    .then(combinedData => {
      console.log('Combined Data:', combinedData);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  