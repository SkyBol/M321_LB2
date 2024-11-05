import {Route, Routes} from 'react-router-dom';
import Login from '../../../user/components/pages/LoginPage/LoginPage';
import Homepage from '../../../homepage/components/pages/Homepage/Homepage';
import BottlePage from "../../../../../domain/modules/bootle/components/pages/BottlePage/BottlePage.tsx";
import AbstractFormGenerated from '../../../abstract/components/form/components/molecules/AbstractFormGenerated';
import { defaultBottle } from '../../../../../domain/modules/bootle/models/Bottle.model.ts';
import BottleTable from "../../../../../domain/modules/bootle/components/pages/BottleTable/BottleTable.tsx";
import BottleDetailPage from "../../../../../domain/modules/bootle/components/pages/BottlePage/BottleDetailPage.tsx";
import GuestBookEntryPage from '../../../../../domain/modules/guestbook/components/pages/GuestBookEntryPage.tsx';
import GuestBook from '../../../../../domain/modules/guestbook/components/pages/GuestBook.tsx';
import CocktailTable from '../../../../../domain/modules/cocktail/components/pages/CocktailTable/CocktailTable.tsx';
import CocktailPage from '../../../../../domain/modules/cocktail/components/pages/CocktailPage/CocktailPage.tsx';
import CocktailDetailPage from '../../../../../domain/modules/cocktail/components/pages/CocktailPage/CocktailDetailPage.tsx';
import SuccessfullLogin from '../../../user/components/pages/SuccessfullLogin/SuccessfullLogin.tsx';
import SuccessfullLogout from '../../../user/components/pages/SuccessfullLogout/SuccessfullLogout.tsx';
import Logout from '../../../user/components/pages/LogoutPage/LogoutPage.tsx';

const Router = () => {
    return (
        <Routes>
            {/* Core Routes */}
            <Route path={'/logout/successfull'} element={<SuccessfullLogout/>} />
            <Route path={'/login/successfull'} element={<SuccessfullLogin/>} />
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/logout'} element={<Logout/>} />


            {/* Domain Routes */}
            <Route path={'/'} element={<Homepage/>} />

            <Route path={'/bottles'}>
                <Route path={'/bottles/add'} element={<BottlePage/>} />
                <Route path={'/bottles/:bottleId'} element={<BottlePage/>}/>
                <Route path={'/bottles/detail/:bottleId'} element={<BottleDetailPage/>}/>
                <Route path='' element={<BottleTable />} />
                <Route path='test' element={<AbstractFormGenerated object={defaultBottle} submitActionHandler={() => {}}/>} />
            </Route>

            <Route path={'/guestBook'} element={<GuestBook/>} />
            <Route path={'/guestBook/add'} element={<GuestBookEntryPage/>} />
            <Route path={'/cocktail'} element={<CocktailTable />} />
            <Route path={'/cocktail/:cocktailId'} element={<CocktailPage />} />
            <Route path={'/cocktail/detail/:cocktailId'} element={<CocktailDetailPage />} />

            <Route path='*' element={<div>Not Found</div>} />
        </Routes>
    );
};

export default Router;
