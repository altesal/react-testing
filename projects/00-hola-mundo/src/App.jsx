import './App.css'

export function App() {
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="El avatar de un invitado "  src="https://unavatar.io/github/calebporzio" className='tw-followCard-avatar' /> 
                <div className='tw-followCard-info'>
                    <strong>Miguel García</strong>
                    <span>@garcia</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}