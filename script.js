/* Estilo para el contenedor de las tarjetas */
// Función para mostrar/ocultar el formulario de información
function toggleForm(index) {
    var form = document.getElementById("form-" + index);
    
    // Si el formulario está oculto, se muestra, si está visible, se oculta
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
  
.card-container {
    display: flex; /* Activa el modelo de diseño Flexbox */
    justify-content: space-between; /* Distribuye el espacio entre las tarjetas */
    gap: 20px; /* Espacio entre las tarjetas */
    flex-wrap: wrap; /* Permite que las tarjetas se envuelvan en caso de que no quepan en una sola fila */
    padding: 20px;
  }
  
  /* Estilo para cada tarjeta */
  .character-card {
    width: 30%; /* Cada tarjeta ocupa el 30% del ancho del contenedor */
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .character-image {
    max-width: 100%;
    height: auto;
  }
  
  .know-more-btn {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .know-more-btn:hover {
    background-color: #0056b3;
  }
  
  .character-info {
    margin-top: 10px;
    display: none;
  }
  