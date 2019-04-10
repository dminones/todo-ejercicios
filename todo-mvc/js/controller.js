function Controller(model) {
  this.model = model;
}
Controller.prototype.addItem = function(item) {
  var tarea = new Tarea(item);
  this.model.listaTareas.add(tarea);
};
Controller.prototype.removeItem = function(index) {
  this.model.listaTareas.remove(index);
};
Controller.prototype.toggleItem = function(index) {
  console.log(index);
  this.model.listaTareas.toggle(index);
};

Controller.prototype.getAllItems = function() {
  this.model.listaTareas.getAllItems();
};
