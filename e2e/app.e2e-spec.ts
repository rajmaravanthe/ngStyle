import { NgStylePage } from './app.po';

describe('ng-style App', function() {
  let page: NgStylePage;

  beforeEach(() => {
    page = new NgStylePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
