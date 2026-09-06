let birthdays = document.querySelector('.birthdays');
// https://birthdays-api.onrender.com/all

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

function fetchData() {
    fetch('https://birthdays-api.onrender.com/all')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        }).then(data => {
            printData(data);
        }).catch(error => {
            console.error('Fetch error: ', error);
        });
}

function printData(data) {
    data.forEach(element => {
        birthdays.innerHTML += `<div class="engineer">
                <span>${element.Name}</span>
                <span>${element.birthday}</span>
            </div>`;
    });
}