import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-3xl px-4 py-24 text-center">
                <h1 className="font-heading text-3xl font-bold text-ink">404</h1>
                <p className="mt-2 text-ink-muted">Page not found.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
