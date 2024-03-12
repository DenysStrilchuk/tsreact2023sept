import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../intterfaces";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>();

    const reg:SubmitHandler<IAuth> = (user) => {
        
    }

    return (
        <form onSubmit={handleSubmit(reg)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>register</button>
        </form>
    );
};

export {Register};