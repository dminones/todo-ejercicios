function init() {
  const controller = new Controller(model);
  const view = new View(model, controller);
  console.log({ controller, model, view });
}

const model = {
  listaTareas: new ListaTareas()
};
// const controller = new Controller(model);
// console.log({ controller, model });

window.onload = init;
