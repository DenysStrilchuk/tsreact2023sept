import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const Car: FC<IProps> = () => {
    return (
        <div>
            Car
        </div>
    );
};

export {Car};