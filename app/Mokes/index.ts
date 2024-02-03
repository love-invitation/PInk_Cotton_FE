export const initMocks = async () => {
    if (typeof window === 'undefined') {
        const { server } = await import('@/Mokes/server');

        server.listen();
    } else {
        const { worker } = await import('@/Mokes/browser');

        worker.start();
    }
};
