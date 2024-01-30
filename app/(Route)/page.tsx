'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Login from '@Component/Login';

const Modal = dynamic(() => import('@Component/Common/Modal'), { ssr: false });

export default function Home() {
    const [isModal, setIsModal] = useState(true);

    return (
        <>
            <h1 className="bg-main-100 hover:text-main-100">hihi</h1>
            <Modal
                visible={isModal}
                onClose={() => console.log('hio')}
            >
                <Login />
            </Modal>
        </>
    );
}
