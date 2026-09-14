window.addEventListener('DOMContentLoaded', event => {
<<<<<<< HEAD
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, {
            perPage: 10,
            perPageSelect: [10, 15, 20, 25],
            labels: {
                placeholder: "Search...",
                perPage: "entries per page",
                noRows: "No entries found",
                info: "Showing {start} to {end} of {rows} entries",
            }
        });
    }
});
=======
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});
>>>>>>> origin/developer2
