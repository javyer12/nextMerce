import React from 'react'
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';

import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import me from '@styles/img/me.png';
import ListProjects from '@context/Project/ListProjects';

function Resumens() {
    return (
        <div>
            <main className=" max-w-7xl   sm:px-6 lg:px-1">

                <ListProjects />
            </main >
        </div >

    )
}

export default Resumens

