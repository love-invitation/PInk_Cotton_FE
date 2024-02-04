'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Home = () => {
    const { data: session } = useSession();

    async function foo() {
        const res = await fetch('/login');
        const data = await res.json();

        console.log(data);
    }

    return (
        <>
            <Link
                href="/login"
                className="bg-main-100 hover:text-main-100"
            >
                hihi
            </Link>

            <button onClick={() => foo()}>로그아웃</button>
        </>
    );
};

export default Home;
