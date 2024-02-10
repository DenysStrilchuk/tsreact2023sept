import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {FC} from "react";

interface IProps {
    changeTrigger: () => void
}

const CarForm:FC<IProps> = ({changeTrigger}) => {
    const {reset, register, handleSubmit, setValue} = useForm<ICar>();

    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger()
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};