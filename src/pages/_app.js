import React, { Fragment } from 'react';
import MainLayout from '@layout/MainLayout';
import "../../node_modules/tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  )
}

export default MyApp
