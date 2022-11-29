import {Main} from '../../pages/main-page/main';
import {Login} from '../../pages/login-page/login';
import {Error} from '../../pages/error/error';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Room} from '../../pages/room-page/room';
import Layout from '../../pages/layout/layout';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={AppRoute.Root} />
        <Route element={<Main />} />
        <Route element={<Login />} path={AppRoute.Login} />
        <Route element={<Room />} path={`${AppRoute.Room}/:id`} />
        <Route element={<Error />} path={AppRoute.Error} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
