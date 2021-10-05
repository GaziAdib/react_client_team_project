import React, {useEffect, useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import '../index.css';


const Team = ({ team }) => {



    return (
        <>

        
       
        
        <Card className='m-2 p-1 rounded'>
            <Card.Body>
                <Card.Title>{team['team-full']}</Card.Title>

                <Card.Title>{team.establishment}</Card.Title>

                <Card.Text>{team.address}</Card.Text>

                <Card.Text>{team.website}</Card.Text>

                <Card.Text>{team.email}</Card.Text>

                <Card.Text>{team.phone}</Card.Text>

                <Card.Text>{team['constituency-description']}</Card.Text>

            </Card.Body>
        </Card>
                       

        
        </>
    )
}

export default Team
