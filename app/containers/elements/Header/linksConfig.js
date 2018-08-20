import messages from './messages';

export default ({ location }) => [
  {
    to: '/filters',
    message: messages.filters,
    location,
  },
  {
    to: '/locations',
    message: messages.locations,
    location,
  },
  {
    to: '/map',
    message: messages.map,
    location,
  },
];
