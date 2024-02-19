import {FC, PropsWithChildren} from 'react';
import {IUser} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    user:IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;

    const navigate  = useNavigate();
    return (
        <div>
            <div>{id} - {name}</div>
            <button onClick={() => navigate(id.toString(), {state:{user}})}>more details</button>
        </div>
    );
};

export {User};