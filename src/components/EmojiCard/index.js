import './index.css'

const EmojiCard = props => {
  const {eachEmoji, addEmojiIdsToList} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickingEmojiCard = () => {
    addEmojiIdsToList(id)
  }

  return (
    <li className="emoji-card" onClick={onClickingEmojiCard}>
      <button type="button" className="emoji-button">
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
