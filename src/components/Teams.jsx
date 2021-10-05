import React, {useEffect, useState} from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import '../index.css';


const Teams = ({ teams }) => {

    // const [teamss, setTeams] = useState([])

    // useEffect(() => {
    //     setTeams(teams)
    // },[teams, teamss])

    return (
        <>

        <Row>
            {teams.map(item => (
                <Col key={item.id}>
                    <Card className='m-2 p-1 rounded'>
                        <Card.Body>
                                <Card.Title>{item['team-full']}</Card.Title>

                                <Card.Title>{item.establishment}</Card.Title>

                                <Card.Text>{item.address}</Card.Text>

                                <Card.Text>{item.website}</Card.Text>

                                <Card.Text>{item.email}</Card.Text>

                                <Card.Text>{item.phone}</Card.Text>

                                <Card.Text>{item['constituency-description']}</Card.Text>

                        </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
            
        </>
    )
}

export default Teams
