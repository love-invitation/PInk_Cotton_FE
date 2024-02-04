import { http, HttpResponse } from 'msw';

export const handler = [
    http.get('/login', () => {
        return HttpResponse.json(
            { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
            {
                headers: {
                    'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
                },
            },
        );
    }),
];
