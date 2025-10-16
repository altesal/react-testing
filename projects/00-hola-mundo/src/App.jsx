import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [{
        userName: 'midudev',
        name: 'Miguel Diaz',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Bart', 
        isFollowing: false
    },
    {
        userName: 'calebporzio',
        name: 'Elon', 
        isFollowing: false
    },  
    {   
        userName: 'sindresorhus',
        name: 'Sindre', 
        isFollowing: false
    }
]


export function App() {
    
    return(
       <section className='App'>
        {
            users.map(user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing} 
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
               
        }
        </section>    
    )
}