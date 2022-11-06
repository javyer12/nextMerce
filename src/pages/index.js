
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import me from '@styles/img/me.png';

const sortOptions = [
  { name: 'Github', href: '#', current: false },
  { name: 'Twitter', href: '#', current: false },
  { name: 'Linkedin', href: '#', current: false },
  { name: 'Platzi', href: '#', current: false },
]
const subCategories = [
  // { name: 'Francisco Murillo', href: '#' },
  { name: 'Experiences', href: '#' },
]
const filters = [
  {
    id: 'frontend',
    name: 'Front-End',
    options: [
      { value: 'javascript', label: 'Java Script', checked: false },
      { value: 'react', label: 'React JS', checked: false },
      { value: 'next', label: 'Next JS', checked: true },
      { value: 'bootstrap', label: 'Bootstrap', checked: false },
      { value: 'webpack', label: 'Webpack', checked: false },
      { value: 'material', label: 'Material', checked: false },
    ],
  },
  {
    id: 'backend',
    name: 'Back-End',
    options: [
      { value: 'node', label: 'Node JS', checked: false },
      { value: 'python', label: 'Python', checked: false },
      { value: 'c#', label: 'C#', checked: true },
      { value: 'express', label: 'Express JS', checked: false },
      { value: 'postgtres', label: 'Postgre SQL', checked: false },
    ],
  },
  {
    id: 'soft',
    name: 'Soft Skill',
    options: [
      { value: 'communication', label: 'Communication', checked: false },
      { value: 'leadership', label: 'Leadership', checked: false },
      { value: 'creativity', label: 'Creativity', checked: false },
      { value: 'adaptability', label: 'Adaptability', checked: false },
      { value: 'teamwork', label: 'Teamwork', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [ mobileFiltersOpen, setMobileFiltersOpen ] = useState(false)

  return (
    <div className="rounded-lg shadow-2xl  bg-white w-full">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden w-full" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Filters */}
                  </div>
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>


                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <div className="overflow-auto">

                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </div>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl  p-3 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b rounded-lg border-gray-100 pt-5 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Front-End Developer</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Social Media
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>


              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-5">
            <h2 id="products-heading" className="sr-only">
              Profile
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10   lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block border-r border-gray-200">
                <div className=" p-2 mb-3  rounded-lg">
                  <img src='https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg' className="bg-clip-content  rounded-full " width='inherit' height="60%" alt="me" />
                  {/* <img src={me.src} className="bg-clip-content  rounded-full " width='inherit' height="60%" alt="me" /> */}
                </div>
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <ChevronDownIcon
                                  className=" mr-1  h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-2">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                {/* <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                /> */}
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-green-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <div className="rounded-md shadow max-w-xl  mt-3 ml-10 mr-10">
                  <a
                    href="/resume"
                    className="flex  p-0 m-0 items-center justify-center rounded-md border border-transparent bg-gray-50  text-base font-small text-black hover:text-white hover:bg-black md:py-4 md:px-10 md:text-lg"
                  >
                    See Skill
                  </a>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* <Surface /> */}
                <main className="  mx-auto flex  max-w-7xl   sm:mt-12 sm:px-6 md:mt-8 lg:mt-0 lg:px-8 ">
                  <div className="sm:text-center lg:text-left ">
                    <h1 className="text-4xl font-bold tracking-tight  mb-10 text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Francisco </span>{' '}
                      <span className="block  text-green-500 xl:inline"> Murillo</span>{' '}
                    </h1>
                    <div className="ml-10  lg:text-justify ">
                      <p className=" text-base m-20 text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                        Francisco is a person who loves evolution, human and technological development, lover of new technologies that help us build a digital world in the near future, I am a frontend dev-junior with JavaScript, React js others, passionate about it sports and the 7 arts.
                      </p>
                    </div>
                    <div className=" sm:mt-8 sm:flex sm:justify-center lg:justify">
                      <div className="rounded-md shadow ">
                        <a
                          href="https://drive.google.com/file/d/1OTdoXYhdaEldDrPEIO8lF2r41r3I1H-c/view?usp=sharing"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-50 px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white md:py-4 md:px-10 md:text-lg"
                        >
                          Watch CV!
                        </a>
                      </div>
                      <div className=" sm:mt-0  sm:ml-3">
                        <a
                          href="/contact"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white md:py-4 md:px-10 md:text-lg"
                        >
                          Contact us!!
                        </a>
                      </div>
                    </div>
                  </div>
                </main>

              </div>
            </div>
          </section>
        </main >
      </div >
    </div >
  )
}