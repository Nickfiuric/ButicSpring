document.addEventListener("DOMContentLoaded", function() {
    const nuevoProductoBtn = document.getElementById('nuevoProductoBtn');
    const nuevoProductoForm = document.getElementById('nuevoProductoForm');

    nuevoProductoBtn.addEventListener('click', function() {
        nuevoProductoForm.classList.toggle('hidden');
    });

    const cancelarBtn = document.getElementById('cancelarBtn');

    cancelarBtn.addEventListener('click', function() {
        nuevoProductoForm.classList.add('hidden');
    });
});