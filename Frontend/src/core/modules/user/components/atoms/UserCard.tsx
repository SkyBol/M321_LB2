import User from "../../models/User.model";
import AbstractCard from "../../../abstract/components/card/components/molecules/AbstractCard";

interface UserCardProps {
    user : User;
    handleEdit : (val : string) => void;
    handleDelete : (val : string) => void;
}

const UserCard = ({ user, handleEdit, handleDelete } : UserCardProps) => {
    return (
        <div key={user.id}>
            <AbstractCard
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                id={user.id}
                bottle={null}
            />
        </div>
    )
}

export default UserCard;