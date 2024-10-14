import { useEffect, useState } from 'react';
import { User } from '../../../models/User.model';
import UserService from '../../../services/UserService';
import { useNavigate } from 'react-router-dom';
import UserList from '../../molecules/UserList/UserList';

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleAdd = () => {
    navigate('/users/add');
  };
  const handleEdit = (id: string) => {
    navigate('/users/' + id);
  };
  const handleDelete = (id: string) => {
    UserService.deleteUser(id);
    setUsers(users.filter((ele) => ele.id !== id))
  };

  return (
    <UserList
      users={users}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
    />
  );
};

export default UserTable;
