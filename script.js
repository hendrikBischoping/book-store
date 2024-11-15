let myBooks = [
    {
        'title': 'Harry Potter und der Stein der Weisen',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 1997,
        'likes': 42779,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'der Beginn einer wundervollen Reise..!'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
    {
        'title': 'Harry Potter und die Kammer des Schreckens',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 1998,
        'likes': 768837,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'ein würdiger zweiter Teil'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
    {
        'title': 'Harry Potter und der Gefangene von Azkaban',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 1999,
        'likes': 1234567,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'ein würdiger dritter Teil'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
    {
        'title': 'Harry Potter und der Feuerkelch',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 2000,
        'likes': 86534,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'ein würdiger vierter Teil'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
    {
        'title': 'Harry Potter und der Orden des Phönix',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 2003,
        'likes': 329537,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'ein würdiger fünfter Teil'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
    {
        'title': 'Harry Potter und der Halbblutprinz',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 2005,
        'likes': 76273,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'ein würdiger sechster Teil'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
    {
        'title': 'Harry Potter und die Heiligtümer des Todes',
        'autor': 'J. K. Rowling',
        'genre': 'fantasy',
        'published': 2007,
        'likes': 36229,
        'liked': true,
        'comments': [
            {
                'name': 'Potterhead94',
                'comment': 'ein würdiger letzter Teil'
            },
            {
                'name': 'Weaslebee',
                'comment': 'Hat meine Kindheit geprägt'
            },
            {
                'name': 'DobbyDerBoss',
                'comment': 'Ein absolutes Muss für jeden Fantasy-Fan!!'
            },
            {
                'name': 'xXhorcrux_hunterXx',
                'comment': 'Magie von ihrer fantastischsten Seite'
            },
            {
                'name': 'happy_hyppogriff_7',
                'comment': 'habe es schon 7 mal gelesen!'
            },
        ]
    },
]

function renderBooks(){
    let booksContentRef = document.getElementById('books_content')
    booksContentRef.innerHTML = "";
    for (let index = 0; index < myBooks.length; index++) {
        let book = myBooks[index];
        booksContentRef.innerHTML += getBookTemplate(index);
        let commentaryRef = document.getElementById('commentary_section'+(index))
        commentaryRef.innerHTML = "";
        renderComments(index, book, commentaryRef)
    } 
}

function renderComments(index, book, commentaryRef){
    commentaryRef.innerHTML = "";
    for (let commentIndex = 0; commentIndex < myBooks[index].comments.length; commentIndex++) {
        let allComments = book.comments[commentIndex];
        commentaryRef.innerHTML += returnComments(allComments)
        }
}

function likeBook(index){
    let redHeart = document.getElementById(`heart_on${index}`)
    let greyHeart = document.getElementById(`heart_off${index}`)
        redHeart.classList.toggle('d-none');
        greyHeart.classList.toggle('d-none');
    let likeCounter = myBooks[index].likes
    let likeCounterRef = document.getElementById(`like-box${index}`)
    if (myBooks[index].liked === true) {
        let counterPlus = likeCounter+=1;
        likeCounterRef.innerHTML = counterPlus;
        myBooks[index].liked = false;
    }else{
        let counterMinus = likeCounter;
        likeCounterRef.innerHTML = counterMinus;
        myBooks[index].liked = true;
    }
}

function addComment(index){
    let commentaryRef = document.getElementById('commentary_section'+(index))
    let inputName = document.getElementById(`input_name${index}`).value
    let inputComment = document.getElementById(`input_comment${index}`).value
    let newCommentObj = {
        name: inputName,
        comment: inputComment
    };
    myBooks[index].comments.unshift(newCommentObj);
    
    renderComments(index, myBooks[index], commentaryRef)
    document.getElementById(`input_name${index}`).value = "";
    document.getElementById(`input_comment${index}`).value = "";
}   
