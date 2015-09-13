toDoList.controller('ToDoListController', [function() {
  var self = this;
  self.listFilter = { active: true };
  self.filter = "Active";
  self.taskList = {
    "tasks": [
    ]
  };

  self.addTask = function() {
    self.taskList.tasks.push({"task": self.newTask, "active": true});
    self.newTask = null
  };

  self.deleteTask = function(completedTask) {
    var index = self.taskList.tasks.indexOf(completedTask);
    console.log(completedTask)
    self.taskList.tasks[index].active = false;
  };

  self.getCount = function() {
    self.toDoCount = 0
    self.taskList.tasks.forEach(function(task) {
      if(task["active"] === true) {
        self.toDoCount++
      }
    });
    return self.toDoCount
  }

}]);