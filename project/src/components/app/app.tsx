import {Main} from '../../pages/main-page/main';

type AppCardsProps = {
  cardsCount: number;
}

function App({cardsCount}: AppCardsProps): JSX.Element {
  return (
    <Main cardsCount={cardsCount}/>
  );
}

export default App;
