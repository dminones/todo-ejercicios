const Tareas = {
  baseUrl: "https://todo-node-rest.herokuapp.com/tasks/",
  list: function(callback) {
    fetch(this.baseUrl)
      .then(response => response.json())
      .then(data => {
        callback(null, data);
      });
  },
  crear: function(tarea, callback) {
    fetch(this.baseUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(tarea)
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          callback(data.errors);
        } else {
          callback(null, data);
        }
      })
      .catch(error => callback(error));
  },
  update: function(id, tarea, callback) {
    fetch(this.baseUrl + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(tarea)
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          callback(data.errors);
        } else {
          callback(null, data);
        }
      })
      .catch(error => callback(error));
  },
  delete: function(id, callback) {
    fetch("https://todo-node-rest.herokuapp.com/tasks/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          callback(data.errors);
        } else {
          callback(null, data);
        }
      })
      .catch(error => callback(error));
  }
};
