import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { fireCollection } from '../../services/firebaseConfig'
import Header from '../../components/Header';
import Loading from '../../components/Loading'
import './styles.css'

export default function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const data = [];
    await fireCollection.getUsers()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          const document = { id: doc.id, first: doc.data().first, last: doc.data().last, born: doc.data().born }
          data.push(document)
        });
      })
      .catch(error => {
        console.log(error)
      });
    setUsers(data)
    setLoading(false)
  }

  function deleteUser(id) {
    fireCollection.deleteUser(id).then(function () {
      console.log("Document successfully deleted!");
      getUsers()
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }


  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Header />
      <Row>
        <Col md="12">
          <div className="button-new-user">
            <Link to="add">New User</Link>
          </div>
          <Table striped bordered hover className="table-users" cellSpacing="0">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>born</th>
                <th>Delete user</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{user.first}</td>
                  <td>{user.last}</td>
                  <td>{user.born}</td>
                  <td>
                    <button className="button-delete" onClick={() => deleteUser(user.id)}>Delete user</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
