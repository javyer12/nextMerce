import { useRouter } from 'next/router';

export default function Nav() {
        const router = useRouter();
        const route = router.asPath.substring(1);
        console.log(route);
        return (
                <nav className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <h1 className="text-2xl  font-bold text-gray-900 capitalize"></h1>
                        </div>
                </nav>

        );
}
