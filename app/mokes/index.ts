export const initMocks = async () => {
    if (typeof window === 'undefined') {
        const { server } = await import('@/mokes/server');

        server.listen();
    } else {
        const { worker } = await import('@/mokes/browser');

        worker.start();
    }
};
