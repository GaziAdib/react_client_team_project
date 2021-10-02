import React from 'react'
import { Form , Button } from 'react-bootstrap'

const SearchBox = (props) => {


    // const submitHandler = (e) => {
    //     e.preventDefault()

    //     console.log('searched')
    // }


    return (
        <div>
            <h1>Search Box</h1>
            <Form onSubmit={props.searchTeams} inline>
                <Form.Control
                type='text'
                name='q'
                onChange={props.handleSearch}
                placeholder='Search...'
                className='mr-sm-2 ml-sm-5'
                >

                </Form.Control>

                <Button type='submit' variant='outline-success' className='p-2'>
                    Search
                </Button>


            </Form>
        </div>
    )
}

export default SearchBox
