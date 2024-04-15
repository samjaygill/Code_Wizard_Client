import React from 'react'
import "./Quiz.css"

function Quiz() {
  return (
    <div className='quiz-container'>
        <div className='question-card'>
        Which method is used to add a new element to the end of an array in JavaScript?
        </div>
        <div className='options'>
        <button className='option-card'>
        push()
        </button>
        <button className='option-card'>
        pop()
        </button>
        <button className='option-card'>
        concat()
        </button>
        </div>
    </div>
  )
}

export default Quiz