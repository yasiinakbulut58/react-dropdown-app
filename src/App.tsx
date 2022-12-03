import { Route, Routes } from 'react-router-dom';

import ThemeProvider from './store/ThemeProvider';

import Home from './views/Home';
import Layout from './views/Layout';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
