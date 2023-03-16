import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Map, CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

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

    // useLayoutEffect(() => {
    //   const mapContainer = mapRef.current; // 지도를 표시할 div
    //   const mapOption = {
    //     center: new kakao.maps.LatLng(props.la, props.lo), // 지도의 중심좌표
    //     level: 3, // 지도의 확대 레벨
    //   };

    //   const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    //   // 커스텀 오버레이에 표시할 내용입니다
    //   // HTML 문자열 또는 Dom Element 입니다
    //   const content = `<div class="overlaybox" >` + '    <div class="parking-fee">4,000</div>' + '</div>';

    //   // 커스텀 오버레이가 표시될 위치입니다
    //   const position = new kakao.maps.LatLng(37.498095, 127.02761);

    //   // 커스텀 오버레이를 생성합니다
    //   const customOverlay = new kakao.maps.CustomOverlay({
    //     position: position,
    //     content: content,
    //     xAnchor: 0.3,
    //     yAnchor: 0.91,
    //   });

    //   // 커스텀 오버레이를 지도에 표시합니다
    //   customOverlay.setMap(map);

    //   // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    //   function zoomIn() {
    //     map.setLevel(map.getLevel() - 1);
    //   }

    //   // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    //   function zoomOut() {
    //     map.setLevel(map.getLevel() + 1);
    //   }
    //   // 지도 확대, 축소 컨트롤의 버튼 클릭 이벤트를 등록합니다
    //   const zoomInBtn = mapContainer.querySelector('.custom_zoomcontrol .zoom-in');
    //   const zoomOutBtn = mapContainer.querySelector('.custom_zoomcontrol .zoom-out');

    //   zoomInBtn.addEventListener('click', zoomIn);
    //   zoomOutBtn.addEventListener('click', zoomOut);

    //   return () => {
    //     // 컴포넌트가 언마운트될 때 이벤트 핸들러를 제거합니다
    //     zoomInBtn.removeEventListener('click', zoomIn);
    //     zoomOutBtn.removeEventListener('click', zoomOut);
    //   };
    // }, []);

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

    useEffect(() => {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setState((prev) => ({
              ...prev,
              center: {
                lat: position.coords.latitude, // 위도
                lng: position.coords.longitude, // 경도
              },
              isLoading: false,
            }));
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
    }, []);

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
                // 커스텀 오버레이가에 대한 확장 옵션
                xAnchor={0.3}
                yAnchor={0.91}
              >
                <ParkingFeeMarker />
              </CustomOverlayMap>
            )}
          </Map>
          <div className="custom_zoomcontrol radius_border">
            <span onClick={zoomIn}>
              <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
            </span>
            <span onClick={zoomOut}>
              <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
            </span>
          </div>
        </div>
      </>
    );
  };
  return <Main />;
}

const mapStyle = { width: 390, height: 766 };
