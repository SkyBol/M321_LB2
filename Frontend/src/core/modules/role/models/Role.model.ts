import roles from '../../../config/Roles';
import { Authority } from '../../authorities/models/Authorities.model';

/**
 * Role type
 */
export type Role = {
  id: string;
  name: roles;
  authorities: Authority[];
};

export default Role;