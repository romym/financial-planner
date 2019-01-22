const hostUrl = 'http://localhost:3001';

async function getUsers() {
  const response = await fetch(`${hostUrl}/users`, {
    accept: 'application/json',
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
}

async function getAccount(accountId) {
  const response = await fetch(`${hostUrl}/accounts/${accountId}`, {
    accept: 'application/json',
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
}

async function createNewUser(userDTO) {
  const response = await fetch(`${hostUrl}/users/`, {
    accept: 'application/json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userDTO),
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
}

async function createNewAccount(accountDTO) {
  const response = await fetch(`${hostUrl}/accounts/`, {
    accept: 'application/json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(accountDTO),
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
}

async function createNewTransaction(transactionDTO) {
  const response = await fetch(`${hostUrl}/transactions/`, {
    accept: 'application/json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transactionDTO),
  });
  const checkedStatus = checkStatus(response);
  const parsedJson = await parseJSON(checkedStatus);
  return parsedJson;
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

export {
  getUsers,
  createNewUser,
  createNewAccount,
  createNewTransaction,
  getAccount,
};
