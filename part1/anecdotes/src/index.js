import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))

  const returnRandomAnecdote = () => {
    let RANDOM = Math.floor(Math.random() * props.anecdotes.length)
    console.log(RANDOM)
    setSelected(RANDOM)
  }
  const voteQuote = () => {
    let newPoints = [...points]
    newPoints[selected] += 1

    // console.log(points)
    // console.log(newPoints)
    setPoints(newPoints)
  }

  return (
    <div>
      <div className="card p-4 mb-2 border-dark rounded">{props.anecdotes[selected]}</div>
      <div className="mb-3 text-danger font-weight-bold">has {points[selected]} votes</div>

      <button className="btn btn-success mr-2" onClick={voteQuote}>Vote</button>
      <button className="btn btn-info" onClick={returnRandomAnecdote}>Next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);