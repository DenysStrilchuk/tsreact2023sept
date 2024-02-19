import {FC, PropsWithChildren} from 'react';
import {IPost} from "../../interfaces";

interface IProps extends PropsWithChildren {
    post:IPost
}

const Post: FC<IProps> = ({post}) => {
   const {userId, title} = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <button>details</button>
            <hr/>
        </div>
    );
};

export {Post};