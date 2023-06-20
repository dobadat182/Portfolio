import React from 'react';
import ReactDOM from 'react-dom';

const NotificationModal = ({ open = false, handleClose = () => {} }) => {
    if (typeof document === 'undefined') return <div className="modal"></div>;
    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-5 modal">
                <div className="absolute inset-0 bg-black bg-opacity-25 overlay"></div>
                <div className="relative p-10 bg-white z-10 rounded-lg w-full max-w-[482px]">
                    <button
                        className="absolute top-0 right-0 cursor-pointer"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>,
        // eslint-disable-next-line no-undef
        document.querySelector('body'),
    );
};

export default NotificationModal;
