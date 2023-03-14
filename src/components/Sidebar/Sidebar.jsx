import { IcBack } from '../../../public/assets/icons';
import styled from 'styled-components';
import theme from './../../styles/theme';

export default function Sidebar() {
  return (
    <MenuWrapper>
      <MenuTitle>
        메뉴<MenuTitleEng>MENU</MenuTitleEng>
      </MenuTitle>
      <SubMenu>
        <MyPage>마이페이지</MyPage>
        <MypageList>
          <ReviewMenu>- 나의 리뷰</ReviewMenu>
          <BookmarkMenu>- 즐겨찾기</BookmarkMenu>
        </MypageList>
      </SubMenu>
      <CarzipInfo>
        <LogoWrapper>
          <Logo src="../public/assets/images/logo.png" alt="카집 로고" />
        </LogoWrapper>

        <TextCopyright>Copyright By Parking-React</TextCopyright>
        <TextTitle>만든 사람들</TextTitle>
        <TextGithub href="https://github.com/LikeLion-FE-Final-Project03" target="_blank" rel="noopener noreferer">
          Parking-React
        </TextGithub>
      </CarzipInfo>
      <BackButton>
        <IcBack />
        <TextBack>뒤로</TextBack>
      </BackButton>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  width: 300px;
  height: 844px;
  background-color: ${theme.colors.dark};
  background-color: #3c454c;
  padding: 36px 20px 17px 20px;
  display: flex;
  flex-flow: column nowrap;
  letter-spacing: -1.25px;
  line-height: 24px;

  & > * {
    order: 0;
  }
`;

const MenuTitle = styled.h1`
  color: ${theme.colors.orangeMain};
  /* font-size: ${theme.fontSizes.subTitle1}; */
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 17px;
  border-bottom: 1px solid ${theme.colors.orangeMain};
`;

const MenuTitleEng = styled.span`
  color: ${theme.colors.white};
  /* font-size: ${theme.fontSizes.paragraph1}; */
  font-size: 16px;
  font-weight: 400;
  margin-left: 2px;
`;

const SubMenu = styled.section`
  height: 443px;
  padding-top: 20px;
`;

const MyPage = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${theme.colors.orangeMain};
  margin-bottom: 12px;
`;

const MypageList = styled.ul`
  padding-left: 12px;
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
`;

const ReviewMenu = styled.li`
  color: ${theme.colors.white};
  list-style-type: none;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const BookmarkMenu = styled.li`
  color: ${theme.colors.white};
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
  font-size: 16px;
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
  color: ${theme.colors.orangeMain};
  order: -1;
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

const TextBack = styled.span`
  margin-left: 4px;
`;
