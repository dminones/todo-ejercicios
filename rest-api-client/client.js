const Tareas = {
  baseUrl: "https://todo-node-rest.herokuapp.com/tasks/",
  list: function(callback) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(xhttp.responseText);
          callback(null, response);
        } else {
          callback(new Error(this.status));
        }
      }
    };
    // se asume que hay una variable con una url
    xhttp.open("GET", this.baseUrl);
    xhttp.send();
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
