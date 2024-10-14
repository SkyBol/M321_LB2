import authorities from "../../../config/Authorities";
import { Role } from "../../role/models/Role.model";
import { Authority } from "../models/Authorities.model";


const authoritySet = new Set<authorities>();

const AuthorityService = {
  initAuthoritySet: (
    user = JSON.parse(localStorage.getItem('user') || '{}')
  ) => {
    const roles = user && user.roles ? user.roles : [];
    roles.forEach((role: Role) => {
      role.authorities.forEach((authority: Authority) => {
        authoritySet.add(authority.name);
      });
    });
  },
  hasAuthority: (authority: authorities) => {
    AuthorityService.initAuthoritySet();

    return authoritySet.has(authority);
  },
  hasAuthorities: (authorities: authorities[]) => {
    AuthorityService.initAuthoritySet();

    for (const element of authorities) {
      if (!authoritySet.has(element)) {
        return false;
      }
    }
    return true;
  },
  hasAnyAuthority: (authorities: authorities[]) => {
    for (const element of authorities) {
      if (authoritySet.has(element)) {
        return true;
      }
    }
    return false;
  },
  clearAuthorities: (): void => {
    authoritySet.clear();
  },
};

export default AuthorityService;
