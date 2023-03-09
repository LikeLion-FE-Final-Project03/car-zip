import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
