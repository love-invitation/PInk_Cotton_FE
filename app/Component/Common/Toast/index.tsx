import { toast, Bounce, ToastContainer as ToastOption } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TToast } from './type';

export default function ToastContainer() {
    return (
        <ToastOption
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
}

const Toast = ({ message }: { message: string }) => {
    return (
        <article>
            <h3 className="text-sm">{message}</h3>
        </article>
    );
};

export const notify = (type: TToast, message: string) => {
    if (type === 'error') {
        toast.error(<Toast message={message} />);
    }
    if (type === 'success') {
        toast.success(<Toast message={message} />);
    }
    if (type === 'info') {
        toast.info(<Toast message={message} />);
    }
    if (type === 'warning') {
        toast.warning(<Toast message={message} />);
    }
};
