import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ header }) => { return (<> <h1>{ header }</h1></>)}

const Button = ({ handlerClick, text }) => { return (<button onClick={ handlerClick }>{ text }</button>)}

const Statics = ({ text }) => { return (<h3>{ text }</h3>) }

const Item = ({ text, count }) => { return (<p>{ text } { count }</p>) }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header = 'give feedback'
  const statics = 'statics'
  const states = ['good', 'neutral', 'bad']

  const addGood = value  => () => setGood(value) 
  const addNeutral = value => () =>  setNeutral(value) 
  const addBad = value => ()  => setBad(value) 

  return (
    <div>
      <Header header={ header } />
      <Button handlerClick={ addGood(good+1) } text={ states[0] }/>
      <Button handlerClick={addNeutral(neutral+1) } text={ states[1] }/>
      <Button handlerClick={ addBad(bad+1) } text={ states[2] }/>
      <Statics text={ statics }/>
      <Item text={ states[0] } count={good}/>
      <Item text={ states[1] } count={neutral}/>
      <Item text={ states[2] } count={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
