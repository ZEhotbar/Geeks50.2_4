import { useForm } from "react-hook-form"

export default function ReactForm() {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm()

const onSubmit = (data) => console.log(data);


    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("emeil", {required: true})}/>
        <input type="text" {...register("passw",{required: true})} />
        <input type="submit"/>
    </form>
    )
}
