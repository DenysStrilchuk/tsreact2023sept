import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const Posts: FC<IProps> = () => {
    return (
        <div>
            Posts
        </div>
    );
};

export {Posts};