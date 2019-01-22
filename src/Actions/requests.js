async function getUsers() {
    const response = await fetch(`http://localhost:3001/users`, {
      accept: 'application/json'
    });
    const checkedStatus = checkStatus(response);
    const parsedJson = await parseJSON(checkedStatus);
    return parsedJson
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error, 'error'); // eslint-disable-line no-console
    throw error;
  }
  
  async function parseJSON(response) {
    return response.json();
  }

const requests = { getUsers };
export default requests;