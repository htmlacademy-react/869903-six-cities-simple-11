import {Login} from '../../pages/login/login';
import {Error} from '../../pages/error/error';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Room} from '../../pages/room/room';
import Layout from '../../pages/layout/layout';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={AppRoute.Root} />
        <Route element={<Login />} path={AppRoute.Login} />
        <Route element={<Room />} path={`${AppRoute.Room}/:id`} />
        <Route element={<Error />} path={AppRoute.Error} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
