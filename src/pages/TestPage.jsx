import React from 'react';
import axios from 'axios';   
import {  Card, CardBody, CardHeader, Col,  Row, Table } from 'reactstrap';  
 
import { useState, useEffect } from 'react' ; 
function EmployeList(props) { 
  
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch("http://10.167.4.185:8080/api/countries");
      const body = await response.json();
      setItems(body.map(({ name, id }) => ({ label: name, value: id })));
    }
    getCharacters();
  }, []);

  const [data, setData] = useState([]);  
  
  useEffect(() => { 
    const GetData = async () => {  
      const result = await axios('https://jsonplaceholder.typicode.com/users');  
      setData(result.data);  
    };  
  
    GetData();  
  }, []);  

  const deleteeployee = (id) => {  
    debugger;  
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)  
      .then((result) => {  
        props.history.push('/dashboard')  
      });  
  };  
  const editemployee = (id) => {  
    props.history.push({  
      pathname: '/edit/' + id  
    });  
  };  
  
  
  return (  
    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Lists 
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>Date</th>  
                    <th>Servide Type</th>  
                    <th>Service Name</th>  
                    <th>City</th>  
                    <th>Country</th>  
                    <th>Gender</th>  
                    <th>Action</th>  
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, id) => {  
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.name}</td>  
                        <td>{item.email}</td>  
                        <td>{item.username}</td>  
                        <td>{item.phone}</td>  
                        <td>  
                          {item.website}  
                        </td>  
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-warning" onClick={() => { editemployee(item.Id) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => { deleteeployee(item.Id) }}>Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  

      <select>
  {items.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>


    </div> 
     
  )  
}  

export default EmployeList