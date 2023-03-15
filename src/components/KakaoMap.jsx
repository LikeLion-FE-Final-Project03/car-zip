import { useRef, useLayoutEffect } from 'react';

export default function KakaoMap(props) {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    const mapContainer = mapRef.current;

    const options = {
      center: new kakao.maps.LatLng(props.la, props.lo),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, options);
  }, []);

  return (
    <>
      <div ref={mapRef} style={mapStyle} />
    </>
  );
}

const mapStyle = { width: 500, height: 400 };
