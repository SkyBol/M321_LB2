import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import userManager from "../../../contexts/UserManager";


const SuccessfullLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const callback = async () => {
            try {
                await userManager.signinRedirectCallback();
            } catch (error) {
                console.error("Error handling callback:", error);
            } finally {
                navigate("/")
            }
        }

        callback();
    }, []);

    return (
        <></>
    )
}

export default SuccessfullLogin;