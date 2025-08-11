import style from "./Task.module.scss"

export const Task  = ({data}) => {
    return <div className={style.taskBlock} onClick={() => alert(data.id)}>
        {data.complited ? "🟩" : "🔴" }
        {data.title}
    </div>
}