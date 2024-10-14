import { Role } from '../../role/models/Role.model';

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
};

export const defaultUser : User = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  roles: [],
}

export default User;