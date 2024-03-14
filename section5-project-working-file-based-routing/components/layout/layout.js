import { MainHeader } from './main-header';

export function Layout(props) {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </>
  );
}
