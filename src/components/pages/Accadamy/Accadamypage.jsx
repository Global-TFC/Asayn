import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function Accadamypage() {
    return (
        <>
            <Row>
                <Col className='p-2'>
                    <HeaderBar className=" p-4">
                        <CreaterName>Creater Home</CreaterName>
                        <Logout>Logout</Logout>
                    </HeaderBar>
                </Col>
            </Row>
            <Row >
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Grouth Graph</Accordion.Header>
                        <Accordion.Body>
                            <Widthset>
                                <Col md="6">
                                    <div class="overflow-auto ">

                                        <LineChart
                                            width={600}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                                        </LineChart>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="overflow-auto w-4">
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                            barSize={20}
                                        >
                                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                                        </BarChart>
                                    </div>
                                </Col>
                            </Widthset>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            <Widthset>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <button variant="primary">Go somewhere</button>
                                    </Card.Body>
                                </Card>
                            </Widthset>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </>
    )
}

const HeaderBar = styled.div`
    border-radius: 20px;
    background-color: #d5f5ff;
    align-content: space-between;
`
const CreaterName = styled.span`
    font-size: larger;
    font-weight: 600;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Logout = styled.span`
    font-size: small;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Widthset = styled.div`
    display: flex;
    align-content: space-between;
    @media (max-width: 768px) {
        display: block;
        margin-bottom: 50px;
    }
`
export default Accadamypage