import './About.css'

function About() {
    return (
        <div>
            <div className={'background-block about'}>

            </div>
            <h1>
                Hello
            </h1>
            <nav className='company'>
                <li><a href='/company/about' style={{ display: 'none' }}>О СТУДИИ</a></li>
                <li><a href='/company/command'>КОМАНДА</a></li>
            </nav>
        </div>
    )
}

export default About