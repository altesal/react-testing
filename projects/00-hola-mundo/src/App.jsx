import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`
    
    return(
       <>
        <TwitterFollowCard formatUserName={format} isFollowing={true} userName="calebporzio" name="MIguel García" />
        <TwitterFollowCard formatUserName={format} isFollowing={true} userName="pheralb" name="Bart" />
        <TwitterFollowCard formatUserName={format} isFollowing={false} userName="midudev" name="Elon" />
        <TwitterFollowCard formatUserName={format} isFollowing userName="vxnder" name="MIguel García" />
        <TwitterFollowCard formatUserName={format} isFollowing userName="calebporzio" name="MIguel García" />
        <TwitterFollowCard formatUserName={format} isFollowing userName="calebporzio" name="MIguel García" />
       </>
    )
}