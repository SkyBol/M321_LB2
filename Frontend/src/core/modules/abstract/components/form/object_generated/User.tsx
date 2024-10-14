import User from "../../../../user/models/User.model";

interface UserProps {
    user : User
}

const User = ({ user } : UserProps) => {
    return (
        <div>
            { user.id }
        </div>
    )
}

export default User;