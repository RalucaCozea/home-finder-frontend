import routes, { buildRoute } from '../routes';

describe('routes', () => {
  describe('buildRoute', () => {
    it('should build an object with passed data', () => {
      const path = '/test';
      const main = 'TestComponent';
      const header = 'HeaderComponent';
      const exact = 'exact';
      const expected = {
        path,
        main,
        header,
        exact: true,
      };
      expect(buildRoute(path, main, header, exact)).toEqual(expected);
    });

    it('should provide appropriate defaults', () => {
      const path = '/test-path';
      const expected = {
        path,
        main: null,
        header: null,
        exact: false,
      };
      expect(buildRoute(path)).toEqual(expected);
    });
  });

  describe('routes', () => {
    it('should be an array', () => {
      expect(Array.isArray(routes)).toBeTruthy();
    });
  });
});
