'use client';
import { useState, type PropsWithChildren, useEffect } from 'react';

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

const MSWComponent = ({ children }: PropsWithChildren) => {
    const [mswReady, setMSWReady] = useState(() => !isMockingMode);

    useEffect(() => {
        const init = async () => {
            if (isMockingMode) {
                const { initMocks } = await import('./index');

                initMocks();
                setMSWReady(true);
            }
        };

        if (!mswReady) {
            init();
        }
    }, [mswReady]);

    if (!mswReady) {
        return null;
    }

    return <>{children}</>;
};

export default MSWComponent;
