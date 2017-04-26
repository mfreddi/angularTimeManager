describe('Factory: tasksFactory', function() {
  var tasks;
  beforeEach(module('angularTimeManager'));
  beforeEach(inject(function(_tasksFactory_) {
    tasks = _tasksFactory_;
  }));

  it('should provide the meaning of life', function() {
    expect(tasks.someMethod() == 42).toBeTruthy();
  });

});
