import './style/cardStyle.scss';

export const Card = ({ id, task, img, text, mony }) => {
const monyRandom = Math.floor(Math.random() * 100000);

const massage = () => {
    alert(`name: ${task}`);
    console.log(`id: ${id}, task: ${task}`);
};

return (
    <div className="Card">
        <h1>{task}</h1>
        <img src={img} alt={task} />
        <p>{text}</p>
        <p>{monyRandom} $</p>
        <button onClick={massage}>Buy now</button>
    </div>
);
};