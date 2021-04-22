import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import Col from '../components/Col';
import Row from '../components/Row';
import Table from '../components/Table';
import Container from '../components/Container';

function Employee() {
    const [employee, setEmployee] = useState([])


    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [{
                    Header: 'First Name',
                    accessor: 'name.first',
                    filter: 'text'
                },
                {
                    Header: 'Last Name',
                    accessor: 'name.last',
                    filter: 'text'
                }]

            },
            {
                Header: 'Employee Information',
                columns: [{

                    Header: 'Department',
                    accessor: 'dept'
                },
                {
                    Header: 'Country',
                    accessor: 'country',
                    filter: 'text'
                },
                {
                    Header: 'Phone Number',
                    accessor: 'phone'
                },
                {
                    Header: 'Email',
                    accessor: 'email'
                },
                ],
            },
        ],
        []

    )
    useEffect(()=>{
        getEmployees();
    },[]);

    function getEmployees () {
        API.genEmployees()
        .then(response =>{
            setEmployee(response.data.results)
        })
        .catch(error =>{console.log(error)})
    }

    return <div>
        <Hero backgroundImage="https://www.freepik.com/premium-vector/global-network-connection-world-wide-web-connection-lines_4839969.htm">
            <h1>WORLD WIDE COMPANY</h1>
            <h2>Employee Directory</h2>
        </Hero>
        <Container>
            <Row>
                <Col>
                <h1>Blah</h1>

                </Col>
            </Row>
            <Row>
                <Table columns={columns} data={employee} />
            </Row>
        </Container>
    </div>

    

};

export default Employee;




