import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {OfferCity, OfferType} from '../../mock/offers';
import leaflet from 'leaflet';

type MapProps = {
  city: OfferCity;
  points: OfferType[];
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, points}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {location} = point;
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
