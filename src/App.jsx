import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './App.css';

// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import VoiceGallery from './pages/VoiceGallery';
import Settings from './pages/Settings';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
        <div className="text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
        <Header user={user} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/voices" element={<VoiceGallery />} />
            <Route path="/messages" element={<Messages user={user} />} />
            <Route path="/settings" element={<Settings user={user} />} />
          </Routes>
        </main>
        <Navigation user={user} />
      </div>
    </BrowserRouter>
  );
}
