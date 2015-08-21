describe('Thermostat',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('Thermostat.html');
    $.holdReady(false);
  });

  it("has a checked box", function() {
    expect('#powerSave').toBeChecked
  });

  it('has a default temp of 20', function() {
    expect('#currentTemp').toContainText('20')
  });

  xit('increases by one', function() {

  });

});
