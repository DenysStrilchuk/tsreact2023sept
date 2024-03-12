import {useAppSelector} from "../../../hooks";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useEffect} from "react";
import {carActions} from "../../../redux";
import {Car} from "../Car";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};