import './App.scss';
import { Card } from './components/card/Card';
import data from "./db/data.json";



export const App = () => {
  const { cards } = data;



  return (
    <div className='wrapper'>
      {cards.map((item, id) => {
          const randomIndex = Math.floor(Math.random() * cards.length)
          const ImgRandom = cards[randomIndex].img

          
          return(
          <Card
          key={id}
          task={item.task}
          img={ImgRandom}
          text={item.text}
        />)
      })}
    </div>
  );
};
