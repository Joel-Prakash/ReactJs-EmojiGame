import {Component} from 'react'
import './index.css'

const emojiLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'

class NavBar extends Component {
  render() {
    const {score, topScore, componentPresent} = this.props
    let scoresContainer
    if (score < 12 && componentPresent === true) {
      scoresContainer = (
        <div className="scores-container">
          <p className="score-details">Score: {score}</p>
          <p className="score-details">Top Score: {topScore}</p>
        </div>
      )
    }
    return (
      <nav className="nav-bar">
        <div className="logo-title-container">
          <img src={emojiLogoUrl} className="game-logo" alt="emoji logo" />
          <h1 className="emoji-title">Emoji Game</h1>
        </div>
        {scoresContainer}
      </nav>
    )
  }
}

export default NavBar
