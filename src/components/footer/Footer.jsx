import './Footer.css'
import Social from '../social/Social.jsx'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__copyright">© Toy.Stream, Inc.</div>
            <nav className="footer__navigation">
                <li><a href="/GameDev/">Главная страница</a></li>
                <li><a href="/GameDev/company/about">Компания</a></li>
                <li><a href="/GameDev/games">Игры</a></li>
                <li><a href="/GameDev/career">Карьера</a></li>
                <li><a href="/GameDev/news">Новости</a></li>
                <li><a href="/GameDev/contacts">Контакты</a></li>
            </nav>
            <Social className='footer__social' />
        </div>
    )
}

export default Footer;