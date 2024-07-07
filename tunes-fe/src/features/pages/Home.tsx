import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import GamePlayground from './GamePlayground'

function Home() {
  return (
    <div className='flex flex-col justify-content items-center'>
      <p className='font-[900] text-[4em] mt-48'>Test your music knowledge now!</p>
      <Link to='create'>
        <Button>+ Create New</Button>
      </Link>
      
    </div>
  )
}

export default Home