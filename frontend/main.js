window.addEventListener("load", () => {
  const form = document.querySelector("#nueva-tarea-form");
  const input = document.querySelector("#nueva-tarea-input");
  const list_el = document.querySelector("#tareas");

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const tareas = input.value;

      if(!tareas){
          swal("¡Error!", "Por favor, escriba una tarea.", "error" );
          return
      }
        const tareas_el = document.createElement("div");
        tareas_el.classList.add("tareas");

        const tareas_content_el = document.createElement("div");
        tareas_content_el.classList.add("content");

        tareas_el.appendChild(tareas_content_el);

        const tareas_input_el = document.createElement('input');
        tareas_input_el.classList.add("text")
        tareas_input_el.type = "text";
        tareas_input_el.value = tareas;
        tareas_input_el.setAttribute("readonly", "readonly");

        tareas_content_el.appendChild(tareas_input_el);

        const tareas_actions_el = document.createElement("div");
        tareas_actions_el.classList.add("acciones");

        const tareas_edit_el = document.createElement("button");
        tareas_edit_el.classList.add("editar");
        tareas_edit_el.innerHTML =  "Editar";

        const tareas_delete_el = document.createElement("button");
        tareas_delete_el.classList.add("eliminar");
        tareas_delete_el.innerHTML = "Eliminar";

        tareas_actions_el.appendChild(tareas_edit_el);
        tareas_actions_el.appendChild(tareas_delete_el);

        tareas_el.appendChild(tareas_actions_el);

        list_el.appendChild(tareas_el);

        input.value = ""

        tareas_edit_el.addEventListener('click', () =>{
            if (tareas_edit_el.innerText.toLowerCase() == "editar"){
                tareas_input_el.removeAttribute('readonly');
                tareas_input_el.focus();
                tareas_edit_el.innerText = "Guardar"
            } else {
                tareas_input_el.setAttribute('readonly', "readonly")
                tareas_edit_el.innerText = "Editar"

                swal("¡Editado!", "Listo, la tarea a sido editada.", "success" );
            }
        });

        tareas_delete_el.addEventListener('click', () => {
            list_el.removeChild(tareas_el);
            swal("¡Eliminado!", "La tarea a sido elimanada.", "success" );

        });
  });
});
