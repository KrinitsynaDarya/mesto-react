import headerLogo from '../images/header-logo.svg';
function Header() {
    return (
        <header className="header">
            <img alt="Логотип проекта" src={headerLogo} className="header__logo" />
        </header>
    )
}

export default Header;