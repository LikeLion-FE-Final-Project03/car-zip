import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import Main from './pages/Main';
import ZipDetail from './pages/ZipDetail/ZipDetail';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import FeeCalculator from './pages/FeeCalculator';
import Mypage from './pages/Mypage';
import NewReview from './pages/NewReview';
import SidebarTest from './pages/SidebarTest';
import Bookmark from './pages/Bookmark';
import ViewReview from './pages/VeiwReview';
import { useState } from 'react';

function App() {
  function CheckLogedIn() {
    const isLogedIn = JSON.parse(window.localStorage.getItem('user'));
    const returnLogedIn = isLogedIn ? (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/detail" element={<ZipDetail />} />
        <Route path="/fee" element={<FeeCalculator />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/bookmark" element={<Bookmark />} />
        <Route path="/sidebar" element={<SidebarTest />} />
        <Route path="/viewreview" element={<ViewReview />} />
        <Route path="/newreview" element={<NewReview />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
    return returnLogedIn;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <CheckLogedIn />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
