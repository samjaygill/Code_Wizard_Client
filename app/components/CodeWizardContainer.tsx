import React from 'react'
import Header from './header/Header'
import Submit from './submit/Submit'
import Skip from './skip/Skip'
import Score from './score/Score'
import Quiz from './quiz/Quiz'

function CodeWizardContainer() {
  return (
    <div className='cw-container'>
        <Header/>
        <div className='score'><Score/></div>
        <Quiz/>
        <div className='skip'><Skip/></div>
        <div className='submit'><Submit/></div>
    </div>
  )
}

export default CodeWizardContainer