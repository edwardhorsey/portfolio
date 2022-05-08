import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

export interface ModalWrapperProps {
    children: JSX.Element;
    isOpen: boolean;
    closeModal: () => void;
}

function ModalWrapper({ isOpen, closeModal, children }: ModalWrapperProps): JSX.Element | null {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
        ReactModal.setAppElement('#modal-root');
    }, []);

    if (isBrowser) {
        return (
            <ReactModal
                isOpen={isOpen}
                overlayClassName="fixed inset-0 bg-blackTransparent w-full h-full z-[1006]"
                className="absolute bottom-auto inset-x-0 border-0 outline-none w-full h-full overflow-y-auto bg-black text-white"
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                {children}
            </ReactModal>
        );
    }

    return null;
}

export default ModalWrapper;
