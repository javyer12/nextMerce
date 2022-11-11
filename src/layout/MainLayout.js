import { Fragment } from 'react';
import Header from '@components/Header';

import Nav from '@common/Nav';

export default function MainLayout({ children }) {
        return (
                //options: orange, black, gray
                <Fragment>
                        <div className="max-h-full bg-white m-0 p-0">
                                <Header />
                                {/* <Nav /> */}
                                <main>
                                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                                {children}
                                        </div>
                                </main>
                        </div>
                </Fragment>
        )
}