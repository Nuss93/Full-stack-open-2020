import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Statistic = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between" style={{border:'1px solid lightgrey', padding:'10px', borderRadius:'0.5rem', marginRight:'10px', width:'33.33%'}}>
      <span>{props.text}</span> <b>{props.value}</b>
    </div>
  )
}
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
      <div className="d-flex align-items-center justify-content-between mb-4">
        <Statistic text="Good" value={feedback.good} />
        <Statistic text="Neutral" value={feedback.neutral} />
        <Statistic text="Bad" value={feedback.bad} />
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <Statistic text="All" value={statistics.totalFeedback} />
        <Statistic text="Average" value={statistics.averageFeedback.toFixed(4)} />
        <Statistic text="Positive" value={statistics.positiveFeedback} />
      </div>
    </>
  )
}
const Button = (props) => {
  return <button className={`ml-1 mr-1 btn btn-${props.color}`} onClick={() => props.handleChange(props.text.toLowerCase())}>{props.text}</button>
}

const App = () => {
  const [feedback, setFeedback] = useState({ good:0, neutral:0, bad:0 })

  const totalFeedback = () => {
    return parseInt(feedback.good) + parseInt(feedback.neutral) + parseInt(feedback.bad)
  }
  const averageFeedback = () => {
    return totalFeedback()/3
  }
  const positiveFeedback = () => {
    let GOOD = parseInt(feedback.good) * 1, NEUTRAL = parseInt(feedback.neutral) * 0, BAD = parseInt(feedback.bad) * -1
    return GOOD + NEUTRAL + BAD
  }
  const handleChange = (state) => {
    let newFeedback = {
      ...feedback,
      [state] : feedback[state] + 1
    }
    
    setFeedback(newFeedback)
  }

  return (
    <div>
      <h4 className="m-0">Give Feedback</h4>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <Button text="Good" handleChange={handleChange} color="success" />
        <Button text="Neutral" handleChange={handleChange} color="warning" />
        <Button text="Bad" handleChange={handleChange} color="danger" />
      </div>

      <Statistics feedback={feedback} statistics={{totalFeedback:totalFeedback(), averageFeedback:averageFeedback(), positiveFeedback:positiveFeedback()}} />
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