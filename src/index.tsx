import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { ToastContainer } from 'react-toastify';
import { initializeMockAdapter } from './utils/mockApi';

initializeMockAdapter();

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
