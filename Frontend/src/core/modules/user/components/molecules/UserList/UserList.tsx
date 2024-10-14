import User from "../../../models/User.model";
import Button from '@mui/material/Button';
import UserCard from "../../atoms/UserCard";

type UserListParams = {
    users : User[];
    handleEdit : (val : string) => void;
    handleDelete : (val : string) => void;
    handleAdd : () => void;
}
const UserList = ({users, handleEdit, handleDelete, handleAdd} : UserListParams) => {
    return (
        <>
            {users.map((user) => (
                <UserCard
                    user={user}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
            <Button
                size='small'
                color='success'
                variant='contained'
                onClick={handleAdd}
            >
                Add
            </Button>
        </>
    )
}

export default UserList;