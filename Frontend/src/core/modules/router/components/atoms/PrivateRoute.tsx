import { Route } from 'react-router-dom';
import authorities from '../../../../config/Authorities';
import roles from '../../../../config/Roles';
import ActiveUserContext from '../../../user/contexts/ActiveUserContext';
import { useContext } from 'react';

type AuthoritiesProp = keyof typeof authorities | (keyof typeof authorities)[];
type RoleProp = keyof typeof roles | (keyof typeof roles)[];

export interface PrivateRouteProps {
    path: string;
    roles: RoleProp;
    authorities: AuthoritiesProp;
    element: JSX.Element | JSX.Element[];
    children: React.ReactNode | React.ReactNode[];
}

const PrivateRoute = ({path, element, children} : PrivateRouteProps) => {
    const { user } = useContext(ActiveUserContext);

    const isUserAllowed = (toCheck: RoleProp | AuthoritiesProp) => {
        if (Array.isArray(toCheck)) {
            
        }
    }

    if (roles) {}
    if (authorities) {}

    return (
        <Route
            path={path}
            element={
                <>
                    { element }
                    { children }
                </>
            }
        />
    );
}