import LoadingOrError from 'components/LoadingOrError';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Footer = lazy(async () => import('components/Footer'));
const Gallery = lazy(async () => import('pages/Gallery'));
const Details = lazy(async () => import('pages/Details'));
const Wallet = lazy(async () => import('pages/Wallet'));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path='/' element={<Gallery />} />
          <Route path=':fruitName' element={<Details />} />
          <Route path='/wallet' element={<Wallet />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
