import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActiveUserContext from "../../../contexts/ActiveUserContext";


const Logout = () => {
    const { logout } = useContext(ActiveUserContext);

    useEffect(() => {
        logout();
    }, [])

    return (
        <>
        </>
    )
}

export default Logout;