import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    
    return(
       <section className='App'>
            <TwitterFollowCard  isFollowing={true} userName="calebporzio"  >Miguel Diaz</ TwitterFollowCard>
            <TwitterFollowCard  isFollowing={true} userName="pheralb" name="Bart" />
            <TwitterFollowCard  isFollowing={false} userName="midudev" name="Elon" />
        </section>    
    )
}