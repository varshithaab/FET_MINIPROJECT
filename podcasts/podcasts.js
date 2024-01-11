let url1 = "http://localhost:3005/podcast";
let response1;
let getPods = async () => {
    response1 = await fetch(url1)
        .then((response) => response.json())
        .then((data) => {
            let rows = '';
            const columnsPerRow = 4; // Adjust this value as needed

            for (let i = 0; i < data.length; i += columnsPerRow) {
                let row = '<div style="display:flex;">';

                for (let j = 0; j < columnsPerRow && i + j < data.length; j++) {
                    const values = data[i + j];
                    row += `
                    <div class="card">
                    <img src="${values.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                            <h5 class="card-title">${values.title}</h5>
                            <p class="card-genre"><b>Genre</b> ${values.genre}</p>
                            <audio src="${values.podcastFile}" controls></audio>
        
                    </div>
                </div>`;
                }

                row += '</div>';
                rows += row;
            }

            
            document.getElementById('podcastCards').innerHTML=rows;
        })
        .catch((error) => {
            console.log(error);
        })
}
getPods();

