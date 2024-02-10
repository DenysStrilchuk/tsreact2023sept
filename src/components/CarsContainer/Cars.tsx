import {FC} from "react";

import {ICar} from "../../interfaces/carInterface";
import {Car} from "./Car";


interface IProps {
    cars:ICar[]
}


const Cars:FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};