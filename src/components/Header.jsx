import logo from '../images/Logo_vector.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип Mesto" />
        </header>
    )
}

export default Header;