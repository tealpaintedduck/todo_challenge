describe('To Do List', function() {
  it('lists tasks as added', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('TASKR');

    element(by.model('listCtrl.newTask')).sendKeys("destroy omnicorp");
    element(by.className('btn-primary')).click();

    expect(element(by.binding('task.task')).getText()).toEqual("destroy omnicorp");
  });

  it('removes tasks from default list when completed', function() {
    browser.get('http://localhost:8080');
    element(by.model('listCtrl.newTask')).sendKeys("destroy omnicorp");
    element(by.className('btn-primary')).click();
    element(by.className('btn-check')).click();
    expect(element(by.className('list-group')).getText()).toEqual("");
  });

  it('shows completed tasks when selecting relevant filter', function() {
    browser.get('http://localhost:8080');
    element(by.model('listCtrl.newTask')).sendKeys("destroy omnicorp");
    element(by.className('btn-primary')).click();
    element(by.className('btn-check')).click();
    element(by.className('filter-complete')).click();
    expect(element(by.binding('task.task')).getText()).toEqual("destroy omnicorp");
  });

  it('does not show active tasks in completed filter', function() {
    browser.get('http://localhost:8080');
    element(by.model('listCtrl.newTask')).sendKeys("destroy omnicorp");
    element(by.className('btn-primary')).click();
    element(by.className('filter-complete')).click();
    expect(element(by.className('list-group')).getText()).toEqual("");
  });

  it('shows both active and completed tasks in "all" filter', function() {
    browser.get('http://localhost:8080');
    element(by.model('listCtrl.newTask')).sendKeys("destroy omnicorp");
    element(by.className('btn-primary')).click();
    element(by.className('btn-check')).click();
    element(by.model('listCtrl.newTask')).sendKeys("grow limbs");
    element(by.className('btn-primary')).click();
    element(by.className('filter-all')).click();
    var tasks = element.all(by.repeater('task in listCtrl.taskList.tasks'));
    expect(tasks.get(0).getText()).toEqual('grow limbs ✓');
    expect(tasks.get(1).getText()).toEqual('destroy omnicorp ✓');
  });

  it('shows the count for active tasks', function() {
    browser.get('http://localhost:8080');
    element(by.model('listCtrl.newTask')).sendKeys("destroy omnicorp");
    element(by.className('btn-primary')).click();
    expect(element(by.className('to-do-count')).getText()).toEqual('Tasks to be done: 1');
  });

  it('shows the active filter', function() {
    browser.get('http://localhost:8080');
    element(by.className('filter-all')).click();
    expect(element(by.className('current-filter')).getText()).toEqual('Displaying: All');
    element(by.className('filter-complete')).click();
    expect(element(by.className('current-filter')).getText()).toEqual('Displaying: Completed');
    element(by.className('filter-active')).click();
    expect(element(by.className('current-filter')).getText()).toEqual('Displaying: Active');
  });
});