import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Statistics = ({ feedback, statistics}) => {
  if(feedback.good === 0 && feedback.neutral === 0 && feedback.bad == 0){
    return (
      <>
        <h4 className="m-0">Statistics</h4>
        <div className="text-center" style={{border:'1px solid lightgrey', padding:'10px', borderRadius:'0.5rem', marginRight:'10px'}}>No feedback given</div>
      </>
    )
  }
  return (
    <>
      <h4 className="m-0">Statistics</h4>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <div style={{border:'1px solid lightgrey', padding:'10px', borderRadius:'0.5rem', marginRight:'10px'}}>
          Good : {feedback.good}
        </div>
        <div style={{border:'1px solid lightgrey', padding:'10px', borderRadius:'0.5rem', marginRight:'10px'}}>
          Neutral : {feedback.neutral}
        </div>
        <div style={{border:'1px solid lightgrey', padding:'10px', borderRadius:'0.5rem', marginRight:'10px'}}>
          Bad : {feedback.bad}
        </div>
      </div>

      <div>
        All : {statistics.totalFeedback}
      </div>
      <div>
        Average : {statistics.averageFeedback.toFixed(4)}
      </div>
      <div>
        Positive : {statistics.positiveFeedback}
      </div>
    </>
  )
}

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

      <Statistics feedback={{'good':good, 'neutral':neutral, 'bad':bad}} statistics={{totalFeedback:totalFeedback(), averageFeedback:averageFeedback(), positiveFeedback:positiveFeedback()}} />
    </div>
  )
}
// statsictics={{totalFeedback:totalFeedback(), averageFeedback:averageFeedback(), positiveFeedback:positiveFeedback()}}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);