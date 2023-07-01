import './Footer.css'
import Social from '../social/Social.jsx'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__copyright">© Toy.Stream, Inc.</div>
            <nav className="footer__navigation">
                <li><a href="/">Главная страница</a></li>
                <li><a href="/company/about">Компания</a></li>
                <li><a href="/games">Игры</a></li>
                <li><a href="/career">Карьера</a></li>
                <li><a href="/news">Новости</a></li>
                <li><a href="/contacts">Контакты</a></li>
            </nav>
            <Social className='footer__social' />
        </div>
    )
}

export default Footer;