import {Main} from '../../pages/main-page/main';
import {Login} from '../../pages/login-page/login';
import {Room} from '../../pages/room-page/room';
import {Error} from './error';
import {OfferType} from '../../pages/mock/offers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

type AppCardsProps = {
  offers: OfferType[];
}

function App({offers}: AppCardsProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main offers={offers}/>} />
        <Route path='login' element={<Login />} />
        <Route path='room' element={<Room />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
