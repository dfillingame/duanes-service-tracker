import { DuanesServiceTrackerPage } from './app.po';

describe('duanes-service-tracker App', () => {
  let page: DuanesServiceTrackerPage;

  beforeEach(() => {
    page = new DuanesServiceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aap works!');
  });
});
