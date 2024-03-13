import css from './Header.module.css';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {authActions} from "../../redux";
import {useEffect} from "react";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const access = authService.getAccessToken();

    useEffect(() => {
        if (access &&  !currentUser)  {
            dispatch(authActions.me())
        }
    }, [dispatch, access, currentUser]);



    return (
        <div  className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            {
                    currentUser
                        ?
                        <div>{currentUser.username} - {currentUser.last_login}</div>
                        :
                <div className={css.tools}>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </div>
            }
        </div>
    );
};

export {Header};