import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, onClickPlayAgain} = this.props

    let winOrLoseMsgEl
    let scoreMsgEl
    let resultEl
    let imgEl

    if (score === 12) {
      winOrLoseMsgEl = <h1 className="won-lose-msg">You Won</h1>
      scoreMsgEl = <p className="best-score-msg">Best Score</p>
      resultEl = <p className="score">{score}/12</p>
      imgEl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="win-lose-img"
          alt="win or lose"
        />
      )
    } else {
      winOrLoseMsgEl = <h1 className="won-lose-msg">You Lose</h1>
      scoreMsgEl = <p className="best-score-msg">Score</p>
      resultEl = <p className="score">{score}/12</p>
      imgEl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="win-lose-img"
          alt="win or lose"
        />
      )
    }

    return (
      <div className="win-lose-card">
        <div className="content-container">
          {winOrLoseMsgEl}
          {scoreMsgEl}
          {resultEl}
          <button
            type="button"
            className="play-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        {imgEl}
      </div>
    )
  }
}

export default WinOrLoseCard
