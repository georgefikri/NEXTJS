<<<<<<< HEAD
import { Fragment } from 'react';

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
||||||| c42ca8b
=======
import { MainHeader } from './main-header';

export function Layout(props) {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </>
  );
}
>>>>>>> origin/main
