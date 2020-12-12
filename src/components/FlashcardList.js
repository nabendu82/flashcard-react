import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards }) => {
    console.log(flashcards)
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}

export default FlashcardList
