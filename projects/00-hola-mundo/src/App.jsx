import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    
    return(
       <section className='App'>
            <TwitterFollowCard  initialIsFollowing={true} userName="calebporzio"  >Miguel Diaz</ TwitterFollowCard>
            <TwitterFollowCard  initialIsFollowing={true} userName="pheralb" name="Bart" />
            <TwitterFollowCard  initialIsFollowing={false} userName="midudev" name="Elon" />
        </section>    
    )
}