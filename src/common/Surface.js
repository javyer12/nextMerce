
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ecommerce from '@styles/img/ecommerce4.png';
import carrito from '@styles/img/carrito.png';
import "../../node_modules/tailwindcss/tailwind.css";

const navigation = [
    { name: 'Product', href: '/dashboard/products' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
export default function Surface() {
    return (
        <div className="relative bg-light mx-auto z-10   ">
            <div className=" absolute z-20  mx-full">
                <div className=" relative z-10 bg-gray-700 pb-4 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <svg
                        className="relative inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <main className="mx-auto  max-w-5xl  mb-30 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">The internet doesn't divide us, </span>{' '}
                                <span className="block text-green-600 xl:inline">it gathers us.</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                Basic settings on Next js to develop a landing page, It's waiting for you to start coding your logic.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="/dashboard/products"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-50 px-8 py-3 text-base font-medium text-green-600 hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                    >
                                        New Products
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="/dashboard"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                                    >
                                        The most sold
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="sm:h-72 mt-40 m-auto md:h-96 "
                    width="75%"
                    height="75%"
                    src={ecommerce.src}
                    alt="ecommerce"
                />
            </div>
        </div>
    )
}