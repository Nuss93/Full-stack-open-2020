import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = () => {
    return parseInt(good) + parseInt(neutral) + parseInt(bad)
  }
  const averageFeedback = () => {
    return totalFeedback()/3
  }
  const positiveFeedback = () => {
    let GOOD = parseInt(good) * 1, NEUTRAL = parseInt(neutral) * 0, BAD = parseInt(bad) * -1
    return GOOD + NEUTRAL + BAD
  }

  return (
    <div>
      <h4 className="m-0">Give Feedback</h4>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <button className="ml-1 mr-1 btn btn-success" onClick={() => setGood(good + 1)}>Good</button>
        <button className="ml-1 mr-1 btn btn-warning" onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button className="ml-1 mr-1 btn btn-danger" onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      <h4 className="m-0">Statistics</h4>
      <div className="d-flex align-items-center justify-content-between mb-3" style={{border:'1px solid lightgrey', padding:'15px', borderRadius:'0.5rem'}}>
        <div>
          Good : {good}
        </div>
        <div>
          Neutral : {neutral}
        </div>
        <div>
          Bad : {bad}
        </div>
      </div>

      <div>
        All : {totalFeedback()}
      </div>
      <div>
        Average : {averageFeedback().toFixed(4)}
      </div>
      <div>
        Positive : {positiveFeedback()}
      </div>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);