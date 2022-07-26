import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion';

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
                        <h2>Creater Home</h2>
                    </HeaderBar>
                </Col>
            </Row>
            <Row>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Grouth Graph</Accordion.Header>
                        <Accordion.Body>
                            <Col>
                                <div class="overflow-auto">

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
                            <Col>
                                <div class="overflow-auto">
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
                `

export default Accadamypage