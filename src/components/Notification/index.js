import { toast } from 'react-toastify';

const Notification = (type, message) => {
    switch (type) {
        case 'WARNING':
            return toast.warning(message, {
            });
        case 'SUCCESS':
            return toast.success(message, {
            });
        case 'ERROR':
            return toast.error(message, {
            });
        default:
            return toast(message, {
                className: 'toast-default',
                bodyClassName: "toast-default-font-size",
                progressClassName: 'toast-default-progress'
            });
    }
}

export default Notification;
