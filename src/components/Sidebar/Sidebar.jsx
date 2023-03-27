import { IcBack } from '../../../public/assets/icons';
import styled from 'styled-components';
import theme from './../../styles/theme';

export default function Sidebar(props) {
  const closeSidebar = () => {
    props.setIsSidebarOpen(false);
  };

  return (
    <SidebarWrapper>
      <MenuWrapper className={props.isSidebarOpen ? 'open' : ''}>
        <MenuTitle>
          메뉴<MenuTitleEng>MENU</MenuTitleEng>
        </MenuTitle>
        <SubMenu>
          <MyPage>마이페이지</MyPage>
          <MypageList>
            <ReviewLi>
              <ReviewMenu href="http://localhost:3000/mypage" tabIndex={0}>
                - 나의 리뷰
              </ReviewMenu>
            </ReviewLi>
            <li>
              <BookmarkMenu href="http://localhost:3000/mypage/bookmark" tabIndex={0}>
                - 즐겨찾기
              </BookmarkMenu>
            </li>
          </MypageList>
        </SubMenu>
        <CarzipInfo>
          <LogoWrapper>
            <Logo src={'../public/assets/images/logo.png'} alt={'카집 로고'} />
          </LogoWrapper>
          <TextCopyright role={'contentinfo'}>Copyright By Parking-React</TextCopyright>
          <TextTitle role={'contentinfo'}>만든 사람들</TextTitle>
          <p>
            <TextGithub
              href="https://github.com/LikeLion-FE-Final-Project03"
              target="_blank"
              rel="noopener noreferer"
              role={'contentinfo'}
              aria-label={'파킹 리액트 깃허브 주소'}
            >
              Parking-React
            </TextGithub>
          </p>
        </CarzipInfo>
        <BackButton aria-label="뒤로가기 버튼" onClick={closeSidebar} onKeyDown={closeSidebar}>
          <IcBack />
          <TextBack>뒤로</TextBack>
        </BackButton>
      </MenuWrapper>
      {props.isSidebarOpen ? <DimmedImage /> : ''}
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DimmedImage = styled.div`
  &:after {
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background: ${theme.colors.black};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  z-index: 4;
  background-color: ${theme.colors.dark};
  padding: 36px 20px 17px 20px;
  display: flex;
  flex-flow: column nowrap;
  letter-spacing: -1.25px;
  line-height: 24px;
  transition: all 0.5s ease;

  & > * {
    order: 0;
  }

  &.open {
    left: 0;
    z-index: 4;
    transition: all 0.5s ease;
  }
`;

const MenuTitle = styled.h1`
  color: ${theme.colors.orangeMain};
  font-size: ${theme.fontSizes.display};
  font-weight: 700;
  padding-bottom: 17px;
  border-bottom: 1px solid ${theme.colors.orangeMain};
`;

const MenuTitleEng = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.paragraph2};
  font-weight: 400;
  margin-left: 2px;
`;

const SubMenu = styled.section`
  height: 443px;
  padding-top: 20px;
`;

const MyPage = styled.h2`
  font-size: ${theme.fontSizes.subTitle2};
  font-weight: 400;
  color: ${theme.colors.orangeMain};
  margin-bottom: 12px;
`;

const MypageList = styled.ul`
  padding-left: 12px;
  list-style-type: none;
  font-size: ${theme.fontSizes.paragraph3};
  font-weight: 400;
  line-height: 21.48px;
`;

const ReviewLi = styled.li`
  margin-top: 12px;
  margin-bottom: 8px;
`;

const ReviewMenu = styled.a`
  color: ${theme.colors.white};
  list-style-type: none;
  text-decoration-line: none;
`;

const BookmarkMenu = styled.a`
  color: ${theme.colors.white};
  text-decoration-line: none;
`;

const CarzipInfo = styled.section`
  height: 271px;
  border-top: 1px solid ${theme.colors.grey};
  padding-top: 12px;
`;

const LogoWrapper = styled.div`
  height: 40px;
  width: 160px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100%;
`;

const TextCopyright = styled.p`
  height: 24px;
  font-size: ${theme.fontSizes.paragraph2};
  color: ${theme.colors.gray};
  margin-bottom: 27px;
`;

const TextTitle = styled.p`
  color: ${theme.colors.gray};
  font-weight: 700;
`;

const TextGithub = styled.a`
  color: ${theme.colors.gray};
  text-decoration-line: none;
`;

const BackButton = styled.button`
  width: 62px;
  padding: 0;
  color: ${theme.colors.orangeMain};
  order: -1;
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.subTitle1};
  margin-bottom: 20px;
  cursor: pointer;
`;

const TextBack = styled.span`
  margin-left: 4px;
`;
