import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import Teams from '../components/Teams'


// functional statefull component 
// implement search and asc and dece order of card
// api: https://api.first.org/data/v1/teams
// corrs: https://robwu.nl/cors-anywhere.html

const TeamList = () => {

    const [teams, setTeams] = useState([])
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
       
    },[url])

    //  const searchTeams = async () => {
    //     const response =  await axios.get(url)
    //     const data = response.data.data
    //     const filteredTeams = data.filter((d) => d.team === searchField)
    //     setFilteredTeam(filteredTeams)
    //  }

    // sorting

    const sortByTeamFullName = () => {
       //const sorted_names =  teams.sort((a, b) => b['team'] - a['team'])
       var sorted_names = teams.sort((a, b) => (b.team > a.team ? 1 : -1))
       setTeams(sorted_names)
       console.log('Sorted')
       console.log(sorted_names)
    }





    // const handleSearch = (e) => {
    //     setSearchField(e.target.value)
    // }


   
    return (
        <>
        <Container>
           
            <SearchBox />

            <Button onClick={sortByTeamFullName}>Sort</Button>
            
            <Teams teams={teams} />

        </Container>
        
            
        </>
    )
}

export default TeamList
