import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const Post: FC<IProps> = () => {
    return (
        <div>
            Post
        </div>
    );
};

export {Post};