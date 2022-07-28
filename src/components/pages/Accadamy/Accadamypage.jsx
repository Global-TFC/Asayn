import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardImage from "../../../assets/image2.webp"
import Earnimage from "../../../assets/image3.webp"

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
        <Crhomepage>
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
                                    <ChartHead>
                                        Course Graph
                                    </ChartHead>
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
                </Accordion>
            </Row>
            <Row xs={1} md={3} lg={2} >
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Creater Tips</Accordion.Header>
                        <Accordion.Body>
                            <Heightset>
                                <Row xs={1} md={3} lg={4} className="overflow-auto" >
                                    {Array.from({ length: 8 }).map((_, idx) => (
                                        <Col style={{marginBottom: "20px"}} >
                                            <Card style={{ display: "inline-block" }}>
                                                <Card.Img thumbnail variant="top" src={Earnimage} />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <OpenButten variant="primary">Learn More</OpenButten>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Heightset>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion  >
                    <Accordion.Item >
                        <Accordion.Header>Earning scheme</Accordion.Header>
                        <Accordion.Body>
                            <Heightset>
                                <Row xs={1} md={3} lg={4} className="overflow-auto" >
                                    {Array.from({ length: 8 }).map((_, idx) => (
                                        <Col style={{marginBottom: "20px"}} >
                                            <Card style={{ display: "inline-block" }}>
                                                <Card.Img thumbnail variant="top" src={CardImage} />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <OpenButten >Learn More</OpenButten>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Heightset>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <Row  className="justify-content-s-center">
                <FooterBar>
                    <Col>hi</Col>
                    <Col></Col>
                </FooterBar>
            </Row>
        </Crhomepage>
    )
}
const Crhomepage = styled.div`
    margin-bottom:20px;
    @media (max-width: 768px) {
        margin-bottom: 200px;
    }
`
const HeaderBar = styled.div`
    border-radius: 20px;
    background-color: #d5f5ff;
`
const CreaterName = styled.span`
    font-size: larger;
    font-weight: 600;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Logout = styled.span`
    position: absolute;
    right: 20px;
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
const Heightset = styled.div`
    display: flex;
    align-content: space-between;
    height:370px ;
    
    @media (max-width: 768px) {
        overflow-x: hidden;
        height:420px ;
        display: inline-flex;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`
const OpenButten = styled.button`
    padding: 5px;
    width: 100%;
    font-size: smaller;
    border-radius: 10px;
    border: none;
    background-color: #2bbcff;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const FooterBar = styled.div`
    height: 200px;
    background-color: #00427c;
    border-radius: 20px ;
    margin-top: 10px;
`
const ChartHead = styled.div`
    height: 40px;
    margin-top: 6px;
`
export default Accadamypage