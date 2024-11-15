function getBookTemplate(index){
    return `<div class="singleBook"><h2>${myBooks[index].title}</h2>
            <img class="book_img"src="./img/book${index}.png" alt="Buch ${index}">
            <table class="bookTable">
                <tr>
                    <td>Autor:</td>
                    <td>${myBooks[index].autor}</td>
                </tr>
                <tr>
                    <td>Genre:</td>
                    <td>${myBooks[index].genre}</td>
                </tr>
                <tr>
                    <td>Veröffentlichung:</td>
                    <td>${myBooks[index].published}</td>
                </tr>
                <tr>
                    <td>Gefällt:</td>
                    <td id="like-box${index}">${myBooks[index].likes}</td>
                </tr>
                <tr>
                    <td>
                        <form action="/action_page.php">
                            <label for="vehicle2">gefällt mir</label>
                        </form>
                    </td>
                    <td>
                        <img src="./img/like_off.png" alt="Herz ausgegraut" onclick="likeBook(${index})" class="heartButton" id="heart_off${index}">
                        <img src="./img/like_on.png" alt="Herz rot" onclick="likeBook(${index})" class="heartButton d-none" id="heart_on${index}">
                    </td>
                </tr>
            </table>
            <div class="commentarySection">
                <div class="commentaryBar">
                    <input type="text" class="inptField" id="input_name${index}" placeholder="  Name" required>
                    <input type="text" class="inptField" id="input_comment${index}" placeholder="  Kommentar" required>
                    <button class="btn" onclick="addComment(${index})">Senden</button>
                </div>
                <div class="commentaryContent" id="commentary_section${index}">${myBooks[index].comments}</div>
            </div>
        </div`
}

function returnComments(allComments){
    return `<div class="writtenComments">
            <p class="break-word">Name: ${allComments.name}</p>
            <p class="break-word">Kommentar: ${allComments.comment}</p></div>`
        }