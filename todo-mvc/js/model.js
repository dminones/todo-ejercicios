function Tarea(tarea) {
  this.tarea = tarea;
  this.hecho = false;
}

Tarea.prototype.toggle = function() {
  this.hecho = !this.hecho;
};

function ListaTareas(tareasInicial = []) {
  this.tareas = [...tareasInicial];
  this.eventoActualizar = new Evento(this);

  this.toggle = function(index) {
    if (index == null) return;

    this.tareas[index].toggle();
    this.eventoActualizar.notificar();
  };

  this.remove = function(index) {
    this.tareas.splice(index, 1);
    this.eventoActualizar.notificar();
  };

  this.add = function(elemento) {
    this.tareas.push(elemento);
    this.eventoActualizar.notificar();
  };

  this.getAllItems = function() {
    Tareas.list((error, respuesta) => {
      console.log(error, respuesta);
      this.tareas = respuesta.map(task => {
        const tarea = new Tarea(task.name);
        tarea.hecho = task.status[0] == "completed";
        return tarea;
      });
      this.eventoActualizar.notificar();
    });
  };
}
