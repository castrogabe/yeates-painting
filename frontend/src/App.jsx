import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='app'>
      <Header />

      <main>
        <Outlet />
        <ScrollRestoration />
        <ToastContainer position='bottom-center' limit={1} />
      </main>

      <Footer />
    </div>
  );
}
