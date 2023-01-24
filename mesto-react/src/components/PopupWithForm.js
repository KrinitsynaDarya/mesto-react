function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}${(props.isOpen) ? ' popup_opened' : ''}`} id="popup-avatar-edit">
            <div className="popup__content">
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <form className={`popup__form popup__form_type_${props.name}`} name="editAvatar" method="POST">
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button type="submit" className="popup__submit-button">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;