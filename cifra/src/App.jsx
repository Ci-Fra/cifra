import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './css/App.css';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { ArticlePage } from './pages/Articles';
import { NotFound } from './pages/404.jsx';
import { AboutUs } from './pages/AboutUs.jsx';
import { Contatti } from './pages/Contatti.jsx';
import {Pagamenti } from './pages/DonaOra.jsx';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';



function App() {


  function Layout() {
    return (
      <>
        <Analytics />
        <SpeedInsights />
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/chi-siamo" element={<AboutUs />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/dona-ora" element={<Pagamenti />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

