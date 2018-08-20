import HomePage from 'containers/dashboard/HomePage/Loadable';
import Header from 'containers/elements/Header';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export const buildRoute = (
  path, main = null, header = null, exact = false
) => ({
  path,
  main,
  header,
  exact: exact === 'exact',
});

const routes = [
  buildRoute(
    '/',
    HomePage,
    Header,
    'exact'
  ),
  buildRoute(
    '/filters',
    HomePage,
    Header,
    'exact'
  ),
  buildRoute(
    '/locations',
    HomePage,
    Header,
    'exact'
  ),
  buildRoute(
    '/map',
    HomePage,
    Header,
    'exact'
  ),

  buildRoute(null, NotFoundPage),
];

export default routes;
