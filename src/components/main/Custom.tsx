import { useState } from 'react';
import axios from 'axios';

function Custom() {
  const [users, setUsers] = useState([]);

  const data = axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const clickHandler = () => {
    data.then((res) => setUsers(res.data));
  };

  return (
    <>
      <button onClick={clickHandler}>button</button>
      <div>{users[2]}</div>
    </>
  );
}

export default Custom;
