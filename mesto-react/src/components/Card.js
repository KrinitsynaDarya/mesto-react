function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img
        className="element__photo"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-number">0</span>
        </div>
      </div>
      <button type="button" className="element__delete-button"></button>
    </div>
  );
}
export default Card;
