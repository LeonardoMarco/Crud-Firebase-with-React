import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Notification from '../../components/Notification';
import Header from '../../components/Header';
import fireCollection from '../../services/firebaseConfig'
import './styles.css';


export default function AddUser() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [born, setBorn] = useState(0);

  function newUser(e) {
    e.preventDefault()
    const user = {
      first,
      last,
      born
    }

    fireCollection.addUser(user)
      .then(res => {
        Notification('SUCCESS', `${first} was added`);
      }).catch(error => {
        Notification('ERROR', 'Something went wrong, try again later.');
      })
  }

  return (
    <Container>
      <Header />
      <Row>
        <Col md="12">
          <form className="form-add" onSubmit={newUser}>
            <div className="input-group">
              <label>First Name</label>
              <input className="input-control" type="text" onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input className="input-control" type="text" onChange={(e) => setLast(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Born in</label>
              <input className="input-control" type="number" onChange={(e) => setBorn(parseInt(e.target.value))} />
            </div>
            <div className="input-group">
              <input type="submit" value="Add new user" className="input-submit" />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
