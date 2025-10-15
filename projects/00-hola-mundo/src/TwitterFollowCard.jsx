import {useState} from 'react'
export function TwitterFollowCard ({children, userName, name}) {

//USando el hook useState
//const state = useState(false)
//const isFollowing = state[0]
//const setIsFollowing = state[1]
//Desestructurando el array que devuelve useState
//primera posicion VALOR del estado
//segunda posicion funcion para actualizar el estado (el interruptor)
const [isFollowing, setIsFollowing] = useState(false)

const  handleClick = () => {
    setIsFollowing(!isFollowing)
}


//const imageSrc = `https://unavatar.io/github/${userName}`
const text = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'  




   return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img 
            alt="El avatar de un invitado "  
            //src={imageSrc}
            src={`https://unavatar.io/github/${userName}`} 
            className='tw-followCard-avatar' /> 
        <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
    </header>
    <aside>
        <button className={buttonClassName} onClick={handleClick} >
            {text}
        </button>
    </aside>
</article>
   )
}