import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from './store';
import { Main } from './layouts/Main';
import { About, Contact, Portfolio } from './pages';
import './design/scss/app.scss';

function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
