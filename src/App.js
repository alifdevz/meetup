import { Route, Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
