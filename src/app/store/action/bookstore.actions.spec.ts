import * as fromBookstore from './bookstore.actions';

describe('addbooksBookstores', () => {
  it('should return an action', () => {
    expect(fromBookstore.addbooksBookstores.type).toBe('[book] Addbooks Bookstores');
  });
});