import './Command.css'

function Command() {
    return (
        <div>
            <div className={'background-block command'}>

            </div>
            <h1>
                Hello
            </h1>
            <nav className='company'>
                <li><a href='/company/about'>О СТУДИИ</a></li>
                <li><a href='/company/command' style={{ display: 'none' }}>КОМАНДА</a></li>
            </nav>
        </div>
    )
}

export default Command