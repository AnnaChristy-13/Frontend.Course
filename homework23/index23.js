
const loadInfo = () => {
    fetch("http://universities.hipolabs.com/search?country=Germany")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error: ", response.status)
            }
            return response.json();

        }).then(data => {
            data.forEach(card => {

                const cardContainer = document.getElementById('cardContainer');

                const uniName = `<h5 class="card-title">${card.name}</h5>`;
                const uniCountry = `<p class="card-text">${card.country}</p>`;
                const btnLink = `<a href="${card.web_pages}" class="btn btn-primary">Go to website</a>`;
                const cardHtml = `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <img src="./Universities-in-Germany.webp" class="card-img-top" alt="Universities-in-Germany">
                            ${uniName}
                            ${uniCountry}
                            ${btnLink}
                        </div>
                    </div>
                `;

                cardContainer.innerHTML+=cardHtml;
            });

        })
        .catch(error => {
            error.value = 'Error' + error.massage;            
        });
};

loadInfo();


