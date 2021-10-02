import React from 'react'
import Header from './components/Header'
import TeamList from './screens/TeamList'


const App = () => {
  return (
    <div>
        <Header />
        <h2 className='text-center p-2 m-2'>React App  Team Project</h2>
        <TeamList />
    </div>
  )
}

export default App
