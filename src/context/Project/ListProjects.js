import React from 'react'

function ListProjects() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10   lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block border-r border-gray-200">
                    <div className=" p-2 mb-3  rounded-lg">
                        <img src='https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg' className="bg-clip-content  rounded-full " width='inherit' height="60%" alt="me" />
                    </div>
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-green-900">

                    </ul>

                    <div className="rounded-md shadow max-w-xl  mt-3 ml-10 mr-10">
                        <a
                            href="/resume"
                            className="flex  p-0 m-0 items-center justify-center rounded-md border border-transparent bg-gray-50  text-base font-small text-black hover:text-white hover:bg-black md:py-4 md:px-10 md:text-lg"
                        >
                            See Projects
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListProjects