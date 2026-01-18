import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        redirect('/api/auth/signin'); // Or custom /login page
    }

    return (
        <div className="min-h-screen bg-neutral-950">
            <div className="border-b border-neutral-800 p-6 flex items-center justify-between">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <div className="text-sm text-neutral-400">
                    Logged in as {session.user?.email}
                </div>
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}
