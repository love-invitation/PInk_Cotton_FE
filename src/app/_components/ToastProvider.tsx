import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
  return <ToastContainer limit={3} />;
};

export default ToastProvider;
