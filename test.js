var expect = chai.expect;

describe("Demo", function() {
  describe("funcion comparar", function() {
    it("Obtener todas las tareas devuelve un array y error null", function(done) {
      Tareas.list(function(error, result) {
        expect(error).to.be.null;

        expect(result).to.be.an("array");
        done();
      });
    });

    it("Postear una tarea nueva", function(done) {
      const nuevaTarea = {
        name: "Mi tarea",
        status: "pending"
      };
      Tareas.crear(nuevaTarea, function(error, result) {
        expect(error).to.be.null;
        expect(result.name).to.be.equal(nuevaTarea.name);
        expect(result.status).to.be.eql([nuevaTarea.status]);
        done();
      });
    });

    it("Postear una tarea con error", function(done) {
      const nuevaTarea = {};
      Tareas.crear(nuevaTarea, function(error, result) {
        console.log({ error });
        expect(error).to.not.be.null;
        done();
      });
    });

    it("Update de tarea", function(done) {
      const nuevaTarea = {
        name: "Mi tarea",
        status: "pending"
      };
      Tareas.crear(nuevaTarea, function(error, result) {
        expect(error).to.be.null;

        Tareas.update(
          result._id,
          { name: "nombre nuevo", status: "completed" },
          function(error, result) {
            expect(result.name).to.be.equal("nombre nuevo");
            expect(result.status).to.be.eql(["completed"]);
            done();
          }
        );
      });
    });

    it("Delete de tarea", function(done) {
      const nuevaTarea = {
        name: "Mi tarea",
        status: "pending"
      };
      Tareas.crear(nuevaTarea, function(error, result) {
        expect(error).to.be.null;

        Tareas.delete(result._id, function(error, result) {
          expect(error).to.be.null;

          done();
        });
      });
    });
  });
});
