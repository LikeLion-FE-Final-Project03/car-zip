import { useRef, useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { IcLocation } from '../../public/assets/icons';

export default function KakaoMap(props) {
  const Main = () => {
    const [draggable, setDraggable] = useState(true);

    const [state, setState] = useState({
      center: {
        lat: 33.450701,
        lng: 126.570667,
      },
      errMsg: null,
      isLoading: true,
    });

    const mapRef = useRef();

    const ParkingFeeMarker = () => (
      <div className="overlaybox">
        <div className="parking-fee">4,000</div>
      </div>
    );

    const zoomIn = () => {
      const map = mapRef.current;
      map.setLevel(map.getLevel() - 1);
    };
    const zoomOut = () => {
      const map = mapRef.current;
      map.setLevel(map.getLevel() + 1);
    };

    const moveToCurrentLocation = () => {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLat = position.coords.latitude;
            const currentLng = position.coords.longitude;

            // 현재 위치로 지도 중심 이동
            const map = mapRef.current;
            map.setCenter(new window.kakao.maps.LatLng(currentLat, currentLng));
          },
          (err) => {
            setState((prev) => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
            }));
          }
        );
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        setState((prev) => ({
          ...prev,
          errMsg: 'geolocation을 사용할수 없어요..',
          isLoading: false,
        }));
      }
    };

    return (
      <>
        <div className={`map_wrap`}>
          <Map
            id="map"
            center={state.center}
            style={{ width: '100%', height: '844px', position: 'relative', overflow: 'hidden' }}
            level={3}
            draggable={draggable}
            ref={mapRef}
          >
            {!state.isLoading && (
              <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
                // 커스텀 오버레이가 표시될 위치입니다
                position={state.center}
                // 커스텀 오버레이에 대한 확장 옵션
                xAnchor={0.3}
                yAnchor={0.91}
              >
                <ParkingFeeMarker />
              </CustomOverlayMap>
            )}
            <div className="custom_zoomcontrol radius_border">
              <span onClick={zoomIn}>
                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
              </span>
              <span onClick={zoomOut}>
                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
              </span>
            </div>
            <button className="currentLocation" onClick={moveToCurrentLocation}>
              <IcLocation />
            </button>
          </Map>
        </div>
      </>
    );
  };
  return <Main />;
}

const mapStyle = { width: 390, height: 766 };
