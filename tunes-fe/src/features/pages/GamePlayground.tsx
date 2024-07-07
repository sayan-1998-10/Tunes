import React from 'react'
import ListOfGames from '../components/gameplayground'
import { Game } from './types'



const defautlGameList : Game[]= [
  {
    title: 'Karaoke',
    description: 'Chilling with your friends.',
    imageSrc: 'src/assets/karaoke-icon.jpeg'
  },
  {
    title: 'Antakshari',
    description: 'Play to win!',
    imageSrc: 'src/assets/karaoke-icon.jpeg'
  },
  {
    title: 'Guess the song',
    description: 'Guess the song before time runs out',
    imageSrc: 'src/assets/karaoke-icon.jpeg'
  }
]

function GamePlayground() {
  return (
    <div>
      <ListOfGames defaultGames={defautlGameList}/>
    </div>
  )
}

export default GamePlayground