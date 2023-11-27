import { Navigate} from "react-router-dom";
import HomePage from "../../page/homepage/HomePage";

const ProtectedRoutes = props => {
    const {isAuth, redirectPath, children} = props;

    return (
        <>
            {isAuth && (children ? children :<HomePage/>) }
            {!isAuth && <Navigate to={redirectPath} />}
        </>
    );
};

export default ProtectedRoutes;