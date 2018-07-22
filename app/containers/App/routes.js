import HomePage from 'containers/dashboard/HomePage/Loadable';
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
    null,
    'exact'
  ),

  buildRoute(null, NotFoundPage),
];

export default routes;
