describe('ToDoList', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }))

  it('initialises with no tasks and an empty new task', function() {
    expect(ctrl.taskList.tasks).toEqual([]);
    expect(ctrl.newTask).toBeUndefined();
  })

  var tasks = [
  {
    "task": "write scary novel"
  },
  {
    "task": "eat coffee cake"
  }]

    var newtasks = [
  {
    "task": "get corgi",
    "active": true
  }]

  var donetasks = [
  {
    "task": "get corgi",
    "active": false
  }]

  it('adds new tasks', function() {
    ctrl.newTask = "get corgi"
    ctrl.addTask();
    expect(ctrl.taskList.tasks).toEqual(newtasks)
  });

  // it('sets tasks to complete', function() {
  //   ctrl.newTask = "get corgi";
  //   ctrl.addTask();

  //   ctrl.newTask = "get more corgi";
  //   ctrl.addTask();
  //   console.log(ctrl.taskList.tasks)
  //   console.log(Object{task: 'get corgi', active: true})
  //   ctrl.deleteTask({task: 'get corgi', active: true});
  //   expect(ctrl.taskList.tasks).toEqual(donetasks)
  // })

  it('increases count as tasks are added', function() {
    ctrl.newTask = "get corgi"
    ctrl.addTask();
    expect(ctrl.getCount()).toEqual(1)
  })

  it('decreases count as tasks are completed', function() {
    ctrl.newTask = "get corgi"
    ctrl.addTask();
    ctrl.taskList.tasks = donetasks
    expect(ctrl.getCount()).toEqual(0)
  })

});