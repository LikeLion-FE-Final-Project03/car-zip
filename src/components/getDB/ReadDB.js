import {
  ref,
  push,
  set,
  query,
  orderByChild,
  get,
  child,
  startAt,
  endAt,
  equalTo,
  limitToLast,
} from 'firebase/database';
import { database } from '../../../Firebase';

const dbRef = ref(database, 'items');
//--------------------------------------------------------------------------------------
/**
 *
 * @param {string} searchKey : 데이터 검색에 필요한 Key
 * @param {string} searchValue : Key의 Value
 *
 */

export function SearchRTDB(searchKey, searchValue) {
  const que = query(dbRef, orderByChild(searchKey), equalTo(searchValue));

  return getQue(que);
}

//-------------------------------------------------------------------------------------
/**
 *
 * @param {number} Centerlatitude : 위도(latitude)
 * @param {number} Centerlongitude  : 경도(longitude)
 */

export async function SearchAreaScope(Centerlatitude, Centerlongitude) {
  const que1 = query(dbRef, orderByChild('latitude'), startAt(Centerlatitude - 0.0091), endAt(Centerlatitude + 0.0091));

  const arrayOne = await getQue(que1);
  const filteredData = await dataFilter(arrayOne, Centerlongitude);
  return filteredData;
}

//--------------------------------------------------------------------------------------

async function getQue(que) {
  return get(que)
    .then((snapshot) => {
      const receivedData = [];
      snapshot.forEach((childSnapshot) => {
        receivedData.push(childSnapshot.val());
      });

      return receivedData;
    })
    .catch((error) => {
      console.error(error.message);
      return { message: error.message };
    });
}
//--------------------------------------------------------------------------------------

async function dataFilter(arr1, Centerlongitude) {
  let filteringData = [];

  await arr1.forEach((item) => {
    if (Centerlongitude - 0.0113 < item.longitude && item.longitude < Centerlongitude + 0.0113) {
      filteringData.push(item);
      // console.log(item.longitude, '값');
    }
  });
  console.log(filteringData);

  return filteringData;
}

//--------------------------------------------------------------------------------------

// const [data, setData] = useState([]);

// useEffect(() => {
//   SearchRTDB('prkplceNo', '350-4-000008').then((res) => {
//     setData(res);
//   });
//   SearchAreaScope().then((res) => {
//     setLocationData(res);
//   });
// }, []);
