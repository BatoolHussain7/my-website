function toggleDetails(button) {
    const detailsRow = button.parentElement.parentElement.nextElementSibling;
    if (detailsRow.style.display === "none") {
        detailsRow.style.display = "table-row";
        button.textContent = " ";
    } else {
        detailsRow.style.display = "none";
        button.textContent = " ";
    }
}




