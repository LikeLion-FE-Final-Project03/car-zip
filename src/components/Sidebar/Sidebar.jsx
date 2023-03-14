import { IcBack } from '../../../public/assets/icons';
import { Logo } from '../../../public/assets/images';
import styled from 'styled-components';
import theme from './../../styles/theme';

const MenuWrapper = styled.div`
  width: 300px;
  height: 844px;
  background-color: ${theme.colors.dark};
`;

export default function Sidebar() {
  return (
    <MenuWrapper>
      <h1 className="menuTitle">
        메뉴<span>MENU</span>
      </h1>
      <section className="subMenu">
        <h2>마이페이지</h2>
        <ul>
          <li className="reviewMenu">나의 리뷰</li>
          <li className="bookmarkMenu">즐겨 찾기</li>
        </ul>
      </section>
      <section className="carzipInfo">
        <Logo />
        <p>Copyright By Parking-React</p>
        <p>만든 사람들</p>
        <p>깃헙 주소</p>
      </section>
      <div className="backButton">
        <IcBack />
        <span>뒤로</span>
      </div>
    </MenuWrapper>
  );
}
