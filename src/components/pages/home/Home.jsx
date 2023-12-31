import './Home.css'
import Social from '../../social/Social'

function Home() {
    const slogans = [
        'Мы создаем мобильные игры, в которые играют миллионы',
        'Мы создаем мобильные игры, в которые ты играешь'
    ]
    const sloganId = Math.round(Math.random() * (slogans.length - 1))
    return (
        <>
            <div className="background-block main">
                <img src="src/assets/img/unicorn.png" alt="unicorn" />
            </div>
            <div className='slogan'>
                <h2>{slogans[sloganId]}</h2>
                <div className='learn'>
                    <Social className='main__social' />
                    <div className='learn-accent'>
                        <a className='learn-more' href='/games'>
                            Узнать подробнее
                            <svg width="91" height="16" viewBox="0 0 91 16" xmlns="http://www.w3.org/2000/svg">
                                <path id="Arrow 3" d="M90.7071 8.70711C91.0976 8.31658 91.0976 7.68342 90.7071 7.29289L84.3431 0.928932C83.9526 0.538408 83.3195 0.538408 82.9289 0.928932C82.5384 1.31946 82.5384 1.95262 82.9289 2.34315L88.5858 8L82.9289 13.6569C82.5384 14.0474 82.5384 14.6805 82.9289 15.0711C83.3195 15.4616 83.9526 15.4616 84.3431 15.0711L90.7071 8.70711ZM0 9H90V7H0V9Z" fill="white" />
                            </svg>
                        </a>
                        <p>«Оригинальные идеи, качество реализации игровых механик и внимание к деталям интерфейса - наши основные принципы.»</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home