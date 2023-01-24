function ImagePopup(props) {
    const { onClose, card } = props;

    return (
        <div className={`popup ${!(Object.keys(card).length === 0 && card.constructor === Object) ? 'popup_opened' : ''}`} id="popup_view-photo">
            <div className="popup__content popup__content_type_photo">
                <button type="button" className="popup__close-button" onClick={onClose}></button>
                <img src={card.link} alt={card.name} className="popup__photo" />
                <p className="popup__photo-caption"></p>
            </div>
        </div>
    )
}

export default ImagePopup;