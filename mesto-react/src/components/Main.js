import profileAvatar from '../images/profile-photo.jpg';
import React from 'react';
import api from '../utils/Api';


function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState(profileAvatar);
    const [userName, setserName] = React.useState("Maibenben user");
    const [userDescription, setUserDescription] = React.useState("Чем занимается");
  

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserAvatar(userData.avatar);
                setserName(userData.name);
                setUserDescription(userData.about);
            })
            .catch((err) => {
             //   console.log(`Ошибка: ${err}`);
            })
    });



    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
                <button className="profile__avatar-button" alt="Сменить фото профиля" onClick={props.onEditAvatar}></button>
                <div className="profile__info">
                    <div className="profile__wrapper">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

        </main>)
}

export default Main;