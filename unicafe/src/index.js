import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = (props) => {
  return(
    <p>{props.value } {props.statistic} </p>
  )
}

const Button = ({ onClick, text }) =>  (
  <button onClick={onClick}>
   {text}
  </button>
)


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        all
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join('')}
    </div>
  )
 }


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('good'))
    setGood (+ 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('neutral'))
    setNeutral (neutral + 1)
  }
  
  const handleBadClick = () => {
    setAll(allClicks.concat('bad'))
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      {good}
      <Button onClick={handleGoodClick} text='good' />
      {neutral}
      <Button onClick={handleNeutralClick} text='neutral' />
      {bad}
      <Button onClick={handleBadClick} text='bad' />
      <History allClicks={allClicks} />
      <h4>Statistics</h4>
      <StatisticLine text="good" value ={allClicks} />
      <StatisticLine text="neutral" value ={allClicks} />
      <StatisticLine text="bad" value ={allClicks} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)