import './App.css'
import CardsPlyer from './components/UserCard/UserCard'
import data from './db/UserList/data.json'

function App() {
  console.log(data);
  
  return (
    <>
    <div className='Wrapper'>
      {data.result.map((post , index) => {
        if(post.active) {
        return <CardsPlyer 
        name={post.name} 
        age={post.age} 
        sity={post.city} 
        active={post.active}
        key={index}/>
        }
        return null
    })}
    </div>
    </>
  )
}

export default App
