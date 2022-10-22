import {Main} from '../../pages/main-page/main';
import {OfferType} from '../../pages/mock/offers';

type AppCardsProps = {
  offers: OfferType[];
}

function App({offers}: AppCardsProps): JSX.Element {
  return (
    <Main offers={offers}/>
  );
}

export default App;
