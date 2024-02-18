import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IUser} from "../../interfaces";
import {userService} from "../../services";

interface IProps extends PropsWithChildren {

}

const Users: FC<IProps> = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            Users
        </div>
    );
};

export {Users};