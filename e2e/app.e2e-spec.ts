import { RisouPage } from './app.po';

describe('risou App', () => {
  let page: RisouPage;

  beforeEach(() => {
    page = new RisouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
