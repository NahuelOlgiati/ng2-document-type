import { Ng2DocumentTypePage } from './app.po';

describe('ng2-document-type App', function() {
  let page: Ng2DocumentTypePage;

  beforeEach(() => {
    page = new Ng2DocumentTypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
