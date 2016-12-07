import { BOSSngPage } from './app.po';

describe('bossng App', function() {
  let page: BOSSngPage;

  beforeEach(() => {
    page = new BOSSngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
