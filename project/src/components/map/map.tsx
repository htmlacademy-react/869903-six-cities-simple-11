import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {OfferCity, OfferType} from '../../mock/offers';
import leaflet, {Marker} from 'leaflet';
import {Point} from '../../types/types';

type MapProps = {
  city: OfferCity;
  points: OfferType[];
  selectedPoint?: Point | undefined;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({city, points, selectedPoint}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined &&
            point.location.latitude === selectedPoint.latitude &&
            point.location.longitude === selectedPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, city, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
