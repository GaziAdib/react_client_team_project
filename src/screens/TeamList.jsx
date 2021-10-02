import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import Team from '../components/Team'


// functional statefull component 
// implement search and asc and dece order of card
// api: https://api.first.org/data/v1/teams
// corrs: https://robwu.nl/cors-anywhere.html

const TeamList = () => {

    const [teams, setTeams] = useState([])
    const [filteredteam, setFilteredTeam] = useState([])
    const [searchField, setSearchField] = useState('')
    const apiUrl = 'api.first.org/data/v1/teams';
    const url = `https://cors-anywhere.herokuapp.com/${apiUrl}`;

    useEffect(() => {

        const getTeams = async () => {
            const response = await axios.get(url, {headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }})
            console.log(response.data.data)
            setTeams(response.data.data)
        }
        getTeams()
       
    },[searchField])

     const searchTeams = async () => {
        const response =  await axios.get(url)
        const data = response.data.data
        const filteredTeams = data.filter((d) => d.team === searchField)
        setFilteredTeam(filteredTeams)
     }


    const handleSearch = (e) => {
        setSearchField(e.target.value)
    }
   
    return (
        <>
        <Container>
            <SearchBox searchTeams={searchTeams} handleSearch={handleSearch}/>
            <Row>
                
               
                {teams.map(team => (
                    <Col key={team.id} sm={12} md={6} lg={4}>
                        <Team team={team}/>
                    </Col>
                    
                ))}
            </Row>
        </Container>
        
            
        </>
    )
}

export default TeamList
