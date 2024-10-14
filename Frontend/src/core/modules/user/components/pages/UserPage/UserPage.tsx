import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { User, defaultUser } from '../../../models/User.model'
import UserService from '../../../services/UserService';
import UserForm from '../../molecules/UserForm/UserForm';


const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    return () => {
      if (userId) {
        UserService.getUser(userId).then((res) => {
          return setUser(res.data);
        });
      }
    };
  }, [userId]);

  const submitActionHandler = (values: User) => {
    if (userId === undefined) {
      UserService.addUser(values).then(() => {
        navigate(-1);
      });
    } else {
      UserService.updateUser(values).then(() => {
        navigate(-1);
      });
    }
  };

  return <UserForm user={user} submitActionHandler={submitActionHandler} />;
};
export default UserPage;
