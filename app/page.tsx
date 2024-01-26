'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

export default function Home() {
    const [isModal, setIsModal] = useState(true);
    const Modal = dynamic(() => import('@Component/Common/Modal'), { ssr: false });

    return (
        <>
            <h1 className="bg-main-100 hover:text-main-100">hihi</h1>
            <Modal
                visible={isModal}
                onClose={() => setIsModal(false)}
            >
                <p className="hover:text-main-100">gh2gg233333333333333333333333333333333</p>
            </Modal>
        </>
    );
}
