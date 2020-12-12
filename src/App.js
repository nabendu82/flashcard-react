import React, { useState, useEffect } from 'react'
import FlashcardList from './components/FlashcardList';
import './App.css'
import axios from 'axios'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
          .then(res => {
            setCards(res.data.results.map((item, index) => {
              let decoded_incorrect = item.incorrect_answers.map(it => decodeString(it))
              return {
                id: `${index}-${Date.now()}`,
                question: decodeString(item.question),
                answer: decodeString(item.correct_answer),
                options: [...decoded_incorrect, decodeString(item.correct_answer)]
              }
            }))
          })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <FlashcardList flashcards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'What is 3 + 3 ?',
    answer: '4',
    options: ['2', '3', '5', '4']
  },
  {
    id: 2,
    question: 'What is four + four ?',
    answer: '8',
    options: ['2', '3', '8', '4']
  },
  {
    id: 1,
    question: 'What is six * six ?',
    answer: '36',
    options: ['2', '36', '5', '4']
  }
]

export default App;
