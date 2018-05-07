import { MAppPage } from './app.po';

describe('m-app App', function() {
  let page: MAppPage;

  beforeEach(() => {
    page = new MAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
