import { useRef, useEffect, useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { IcLocation } from '../../public/assets/icons';
import { SearchAreaScope } from './getDB/ReadDB';
import ParkingLotBottomSheet from './ParkingLotBottomSheet';
import { useRecoilState } from 'recoil';
import { parkinglotListState, searchTextState } from '../RecoilState/RecoilState';

export default function KakaoMap(props) {
  const [state, setState] = useState({
    center: {
      lat: 36.013434,
      lng: 129.349478,
    },
    isPanto: false,
    errMsg: null,
    isLoading: true,
    isBottomSheetOpen: false,
    currentMarker: null,
  });

  return <Main state={state} setState={setState} />;
}

const Main = ({ state, setState }) => {
  const [draggable, setDraggable] = useState(true);
  const [locationData, setLocationData] = useState([]);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [listState, setListState] = useRecoilState(parkinglotListState);

  // useEffect(() => {
  //   SearchAreaScope(state.center.lat, state.center.lng).then((res) => {
  //     setLocationData(res);
  //   });
  // }, []);

  useEffect(() => {
    console.log('kakaomap.jsx 의 useEffect');
    searchPlace(searchText);
    ParkingFeeMarker;
  }, [searchText]);

  const positions = [];

  locationData.forEach((obj) => {
    positions.push({
      title: obj.prkplceNm,
      latlng: { lat: obj.latitude, lng: obj.longitude },
      fee: obj.basicCharge,
      basicTime: obj.basicTime,
      prkplceNo: obj.prkplceNo,
      prkplceSe: obj.prkplceSe,
    });
  });

  const mapRef = useRef();

  const ParkingFeeMarker = (props) => {
    const handlingClickOverlay = () => {
      props.onClick();
    };

    return (
      <div
        className={`overlaybox ${props.prkplceNo === state.currentMarker?.prkplceNo ? 'clicked' : ''}`}
        onClick={handlingClickOverlay}
        data-prkplce-no={props.prkplceNo}
      >
        <div className="parking-fee">{+props.fee === 0 ? '무료' : props.fee}</div>
      </div>
    );
  };

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

  function searchPlace(keyword = '서울 광화문') {
    console.log('searchPlace가 실행되었습니다.');
    const places = new window.kakao.maps.services.Places();

    const callback = function (result, status) {
      const map = mapRef.current;

      if (status === kakao.maps.services.Status.OK) {
        const currentLat = Number(result[0].y);
        const currentLng = Number(result[0].x);

        SearchAreaScope(currentLat, currentLng).then((res) => {
          setListState(res);
          setLocationData(res);
        });
        map.setCenter(new window.kakao.maps.LatLng(currentLat, currentLng));
      }
    };
    places.keywordSearch(keyword, callback);
  }

  return (
    <>
      <div className={`map_wrap`}>
        <Map
          id="map"
          center={state.center}
          isPanto={state.isPanto}
          style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}
          level={3}
          draggable={draggable}
          ref={mapRef}
        >
          ›
          {positions.map((position, index) => (
            <CustomOverlayMap
              key={position.prkplceNo + position.title}
              position={position.latlng}
              xAnchor={0.3}
              yAnchor={0.91}
              onClick={() => {}}
            >
              <ParkingFeeMarker
                center={position.latlng}
                title={position.title}
                fee={position.fee}
                basicTime={position.basicTime}
                prkplceNo={position.prkplceNo}
                prkplceSe={position.prkplceSe}
                onClick={() => {
                  if (state.currentMarker && state.currentMarker.prkplceNo === position.prkplceNo) {
                    // 현재 클릭된 마커와 같은 마커를 클릭하면 바텀시트 닫기
                    setState((prev) => ({
                      ...prev,
                      isBottomSheetOpen: false,
                      currentMarker: null,
                    }));
                  } else {
                    setState((prev) => ({
                      ...prev,
                      center: { lat: position.latlng.lat, lng: position.latlng.lng },
                      isPanto: true,
                      isBottomSheetOpen: true,
                      currentMarker: position,
                      selectedParkingLot: {
                        title: position.title,
                        fee: position.fee,
                        basicTime: position.basicTime,
                        prkplceNo: position.prkplceNo,
                        prkplceSe: position.prkplceSe,
                      },
                    }));
                  }
                }}
              />
            </CustomOverlayMap>
          ))}
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
      {state.isBottomSheetOpen && (
        <ParkingLotBottomSheet show={state.isBottomSheetOpen} selectedParkingLot={state.selectedParkingLot} />
      )}
    </>
  );
};
