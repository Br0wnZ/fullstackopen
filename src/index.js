import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ header }) => { return (<> <h1>{header}</h1></>) }

const Button = ({ handlerClick, text }) => { return (<button onClick={handlerClick}>{text}</button>) }

const Item = ({ text, count }) => { return (<p>{text} {count}</p>) }


const Calculated = ({ text, count }) => {
  if (count) {
    return (
      <p>{text} {count}%</p>
    )
  }
  return (
    <p>{text} 0</p>
  )
}

const Statics = ({ statics }) => {
  const good = statics.values[0]
  const neutral = statics.values[1]
  const bad = statics.values[2]
  if ((good + neutral + bad) > 0) {
    return (
      <>
        <h3>{statics.header}</h3>
        <Item text={statics.states[0]} count={statics.values[0]} />
        <Item text={statics.states[1]} count={statics.values[1]} />
        <Item text={statics.states[2]} count={statics.values[2]} />
        <Item text={statics.states[3]} count={good + neutral + bad} />
        <Calculated text={statics.states[4]} count={(good - bad) / (good + neutral + bad)} />
        <Calculated text={statics.states[5]} count={(good / (good + neutral + bad)) * 100} />
      </>
    )
  }
  return (
    <>
    <h3>{statics.header}</h3>
    <p>No feedback given</p>
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header = 'give feedback'
  const states = ['good', 'neutral', 'bad', 'all', 'average', 'positive']
  const staticts = {
    header: 'staticts',
    states: ['good', 'neutral', 'bad', 'all', 'average', 'positive'],
    values: [good, neutral, bad]
  }

  const addGood = value => () => setGood(value)
  const addNeutral = value => () => setNeutral(value)
  const addBad = value => () => setBad(value)

  return (
    <div>
      <Header header={header} />
      <Button handlerClick={addGood(good + 1)} text={states[0]} />
      <Button handlerClick={addNeutral(neutral + 1)} text={states[1]} />
      <Button handlerClick={addBad(bad + 1)} text={states[2]} />
      <Statics statics={staticts} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
