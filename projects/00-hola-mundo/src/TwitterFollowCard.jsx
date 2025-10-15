export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) {
//const imageSrc = `https://unavatar.io/github/${userName}`
   return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img 
            alt="El avatar de un invitado "  
            //src={imageSrc}
            src={`https://unavatar.io/github/${userName}`} 
            className='tw-followCard-avatar' /> 
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
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