import React, { useState, useEffect } from 'react';
import { fireCollection } from '../../services/firebaseConfig'

export default function AddUser() {
  const [first, setFirst] = useState('');
  const [middle, setMiddle] = useState('');
  const [last, setLast] = useState('');
  const [born, setBorn] = useState(0);

  function newUser() {
    const user = {
      first,
      middle,
      last,
      born
    }

    fireCollection.addUser(user)
      .then(res => {
        console.log(res.id)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <input type="text" onChange={(e) => setFirst(e.target.value)} />
      <input type="text" onChange={(e) => setLast(e.target.value)} />
      <input type="text" onChange={(e) => setMiddle(e.target.value)} />
      <input type="number" onChange={(e) => setBorn(parseInt(e.target.value))} />
      <button onClick={newUser}>teste aqui</button>
    </div>
  );
}
