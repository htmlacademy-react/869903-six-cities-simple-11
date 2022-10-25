import {Main} from '../../pages/main-page/main';
import {Login} from '../../pages/login-page/login';
import {Room} from '../../pages/room-page/room';
import {Error} from '../../pages/error/error';
import {OfferType} from '../../offers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';

type AppCardsProps = {
  offers: OfferType[];
}

function App({offers}: AppCardsProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main offers={offers}/>} path={AppRoute.Root} />
        <Route element={<Login />} path={AppRoute.Login} />
        <Route element={<Room />} path={AppRoute.Room} />
        <Route element={<Error />} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
