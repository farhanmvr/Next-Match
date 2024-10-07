import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="text-center">
            <Button color="primary" variant='bordered' as={Link} href='/members'>Click me</Button>
        </div>
    );
}
