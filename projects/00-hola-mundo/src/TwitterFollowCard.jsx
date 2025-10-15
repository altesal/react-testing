export function TwitterFollowCard ({children, userName, name, isFollowing}) {


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
        <button className={buttonClassName}>
            {text}
        </button>
    </aside>
</article>
   )
}