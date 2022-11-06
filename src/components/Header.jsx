import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import me from '@styles/img/me.png';

import { Disclosure, Menu, Transition } from '@headlessui/react';

const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },

];

function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
}

export default function Header() {
        const [ log, setLog ] = useState(true);
        const router = useRouter();
        const route = router.asPath.substring(1);
        console.log(route);
        const navigation = [
                { name: 'Resume', href: '/resume', current: route === 'resume' ? true : false }, //aqui agregar la parte de las herramientas
                { name: 'Projects', href: '/projects', current: route === 'projects' ? true : false },
                { name: 'Contact', href: '/contact', current: route === 'contact' ? true : false },
        ];
        return (
                <>
                        <Disclosure as="nav" className=" bg-gray-100">
                                {({ open }) => (
                                        <>
                                                <div className=" static max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-13">
                                                        <div className="flex items-center justify-between h-16">
                                                                <div className="flex items-center">
                                                                        <div className="flex-shrink-0">
                                                                                <Link href="/"><a><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /></a></Link>
                                                                        </div>
                                                                        <div className="hidden md:block  items-center">
                                                                                <div className="ml-10 flex items-baseline space-x-4 ">
                                                                                        {navigation.map((item) => (
                                                                                                <Link href={item.href}>
                                                                                                        <a
                                                                                                                key={item.name}
                                                                                                                href={item.href}
                                                                                                                className={classNames(item.current ? 'bg-gray-200 text-green-700' : 'text-gray-500 hover:bg-gray-300 hover:text-black', 'px-3 py-2 rounded-md text-sm font-medium')}
                                                                                                                aria-current={item.current ? 'page' : undefined}
                                                                                                        >
                                                                                                                {item.name}
                                                                                                        </a>
                                                                                                </Link>
                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="hidden md:block">
                                                                        <div className="ml-4 flex items-center md:ml-6">
                                                                                {/* Profile dropdown */}
                                                                                <Menu as="div" className="ml-3 relative">
                                                                                        <div>
                                                                                                <Menu.Button className="max-w-sm bg-gray-200 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
                                                                                                        <span className="sr-only">Open user menu</span>
                                                                                                        <img className="h-11 w-11 rounded-full"
                                                                                                                src={me.src}
                                                                                                                alt="Workflow" />
                                                                                                </Menu.Button>
                                                                                        </div>
                                                                                        <Transition
                                                                                                as={Fragment}
                                                                                                enter="transition ease-out duration-100"
                                                                                                enterFrom="transform opacity-0 scale-95"
                                                                                                enterTo="transform opacity-100 scale-100"
                                                                                                leave="transition ease-in duration-75"
                                                                                                leaveFrom="transform opacity-100 scale-100"
                                                                                                leaveTo="transform opacity-0 scale-95"
                                                                                        >
                                                                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                                                        {log ?
                                                                                                                <button
                                                                                                                        className="block px-4 py-2 text-sm text-gray-700">
                                                                                                                        Log out
                                                                                                                </button>
                                                                                                                :
                                                                                                                <Link href='/login'><p className="block px-4 py-2 text-sm text-gray-700">Log in</p></Link>
                                                                                                        }
                                                                                                </Menu.Items>
                                                                                        </Transition>
                                                                                </Menu>
                                                                        </div>
                                                                </div>
                                                                <div className="-mr-2 flex md:hidden">
                                                                        {/* Mobile menu button */}
                                                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                                                <span className="sr-only">Open main menu</span>
                                                                                {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> :
                                                                                        "No icon"
                                                                                }
                                                                        </Disclosure.Button>
                                                                </div>
                                                        </div>
                                                </div>

                                                <Disclosure.Panel className="md:hidden">
                                                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                                {navigation.map((item) => (
                                                                        <Disclosure.Button
                                                                                key={item.name}
                                                                                as="a"
                                                                                href={item.href}
                                                                                className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                                                                                aria-current={item.current ? 'page' : undefined}
                                                                        >
                                                                                {item.name}
                                                                        </Disclosure.Button>
                                                                ))}
                                                        </div>
                                                        <div className="pt-4 pb-3 border-t border-green-700">
                                                                <div className="flex items-center px-5">
                                                                        <div className="flex-shrink-0">
                                                                                <img className="h-10 w-10 rounded-full"
                                                                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                                                        alt="Workflow" />
                                                                        </div>
                                                                        <div className="ml-3">
                                                                                <div className="text-base font-medium leading-none text-white">Name</div>
                                                                                <div className="text-sm font-medium leading-none text-gray-400">Info</div>
                                                                        </div>
                                                                        <button
                                                                                type="button"
                                                                                className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                                        >
                                                                                <span className="sr-only">View notifications</span>
                                                                        </button>
                                                                </div>
                                                                <div className="mt-3 px-2 space-y-1">
                                                                        {userNavigation.map((item) => (
                                                                                <Disclosure.Button key={item.name} as="a" href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                                                                                        {item.name}
                                                                                </Disclosure.Button>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </Disclosure.Panel>
                                        </>
                                )}
                        </Disclosure>
                </>
        );
}
