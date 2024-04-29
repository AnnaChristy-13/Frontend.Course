
let url1 = 'https://catfact.ninja/fact';

const catFactArea = document.getElementById('catFact');


const loadInfo = () => {
    fetch(url1)
        .then(response => {
            return response.json();
        }).then(data => {
            catFactArea.value = data.fact;
        })
        .catch(error => {
            error.value = 'Error' + error.massage;
            catFactArea.style.color = 'red';
            console.error(error);
        });
};

document.getElementById('btnGetInfo').addEventListener('click', loadInfo);

