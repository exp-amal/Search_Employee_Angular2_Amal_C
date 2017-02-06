import { SearchEmployeePage } from './app.po';

describe('search-employee App', function() {
  let page: SearchEmployeePage;

  beforeEach(() => {
    page = new SearchEmployeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
