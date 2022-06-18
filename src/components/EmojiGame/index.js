/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    emojiIdsList: [],
    score: 0,
    topScore: 0,
    componentPresent: true,
    lostScore: 0,
  }

  resetGame = () => {
    this.setState({emojiIdsList: [], componentPresent: true})
  }

  addEmojiIdsToList = id => {
    const {emojiIdsList} = this.state
    const idIncludes = emojiIdsList.includes(id)
    if (idIncludes === false) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        topScore: prevState.topScore + 1,
        lostScore: prevState.lostScore + 1,
      }))
    } else if (idIncludes === true) {
      this.setState({score: 0, componentPresent: false})
    }
    this.setState(prevState => ({
      emojiIdsList: [...prevState.emojiIdsList, id],
    }))
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, componentPresent, lostScore} = this.state
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    let component
    if (componentPresent === true && score < 12) {
      component = (
        <ul className="emojis-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              score={score}
              addEmojiIdsToList={this.addEmojiIdsToList}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      )
    } else if (componentPresent === false) {
      component = (
        <div className="win-lose-card-container">
          <WinOrLoseCard
            score={lostScore}
            startPlayingAgain={this.startPlayingAgain}
            componentPresent={componentPresent}
            onClickPlayAgain={this.resetGame}
          />
        </div>
      )
    } else if (score === 12) {
      component = (
        <div className="win-lose-card-container">
          <WinOrLoseCard
            score={score}
            componentPresent={componentPresent}
            startPlayingAgain={this.startPlayingAgain}
            onClickPlayAgain={this.resetGame}
          />
        </div>
      )
    }

    return (
      <div className="main-container">
        <NavBar
          score={score}
          topScore={topScore}
          componentPresent={componentPresent}
        />
        {component}
      </div>
    )
  }
}

export default EmojiGame
