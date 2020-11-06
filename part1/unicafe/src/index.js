import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h4 className="m-0">Give Feedback</h4>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <button className="ml-1 mr-1 btn btn-success" onClick={() => setGood(good + 1)}>Good</button>
        <button className="ml-1 mr-1 btn btn-warning" onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button className="ml-1 mr-1 btn btn-danger" onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      <h4 className="m-0">Statistics</h4>
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
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);