//// we simulate getting data from DB/SERVER/API
function getDataFromDB() {
    return [
        {
            id: "1",
            title: "JS is amazing",
            body: "JS is amazing and so easy to learn. I like it a lot!",
            author: "CB"
        },
        {
            id: "2",
            title: "DOM manipulation is easy",
            body:
                "DOM Manipulation using JS is straightforward and fun! You can intercept user actions and change things in the HTML and also in CSS.",
            author: "Anonymous"
        },
        {
            id: "3",
            title: "CSS is nice",
            body:
                "To style your HTML page is so much fun! I like playing with colosand images!",
            author: "AB"
        },
        {
            id: '4',
            title: 'Ana are mere',
            body: 'this is my awesome comment',
            author: 'John',
        },
    ];
}

// We set a convention
// All variables that container a DOM element
// should start with $

var $comments = document.querySelector('.comments');


function createCommentElement(title, comment, author, index) {
    var $article = document.createElement('article');
    //console.dir($article);
    //1. add header with text to $article
    var $header = document.createElement('header');
    $header.innerText = title;
    $article.appendChild($header);
    //2.add p with class and text to $article:
    var $p = document.createElement('p');
    $p.innerText = comment;
    $p.classList.add('comment');
    $article.appendChild($p);
    //3. add footer with text to $article:
    var $footer = document.createElement('footer');
    $footer.innerText = author;
    $article.appendChild($footer);
    //4. add like button to $article:
    var $likeButton = document.createElement('button');
    $likeButton.innerText = "Like"
    $likeButton.classList.add('like');
    $article.appendChild($likeButton);
    $likeButton.addEventListener('click', function () {
        return showCommentIndex(index)
    });
    // /add remove button to $article:
    var $deleteButton = document.createElement('button');
    $deleteButton.innerText = "Delete";
    $deleteButton.classList.add('delete');
    $article.appendChild($deleteButton);
    $deleteButton.addEventListener('click', removeComment);

    return $article;

}

function removeComment(){
    var currentElement = this.parentElement;
    
    currentElement.remove();
}

function listComments(comments) {
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        console.log(comment);

        // folosim aceeasi metoda de a scurta codul, pun totul in variabila $article:
        var $article = createCommentElement(comment.title, comment.body, comment.author, i);



        /*var $article = document.createElement('article');
        //console.dir($article);
        //1. add header with text to $article
        var $header = document.createElement('header');
        $header.innerText= comment.title
        $article.appendChild($header);
        //2.add p with class and text to $article:
        var $p=document.createElement('p');
        $p.innerText=comment.body;
        $p.classList.add('comment');
        $article.appendChild($p);
        //3. add footer with text to $article:
        var $footer= document.createElement('footer');
        $footer.innerText=comment.author;
        $article.appendChild($footer);*/

        //4. add $article to $comments:
        $comments.appendChild($article);
    }

}

var $title = document.querySelector('input[name="title"]');
var $comment = document.querySelector('textarea[name="comment"]');
var $author = document.querySelector('input[name="author"]');


function addComment(event) {
    console.dir('add comment');
    //we stop the submit event form happening
    event.preventDefault();
    console.dir(event);
    console.dir($title.value);
    console.dir($comment.value);
    console.dir($author.value);

    // ca sa apelez functia createCommentElement fac o variabila si ii dau valorile care trebuie sa le aiba noul article creat:
    var $article = createCommentElement($title.value, $comment.value, $author.value);

    /* ACEST COD SE DUPLICA, IAR DIN ACEASTA CAUZA FACEM O FUNCTIE CU CREAREA ARTICOLULUI, FACEM FUNCTIA createCommentElement:
    //here we create a new article (this will be the new comment we add)
    var $article = document.createElement('article');
    //console.dir($article);
    //1. add header with text to $article
    var $header = document.createElement('header');
    $header.innerText= $title.value;
    $article.appendChild($header);
    //2.add p with class and text to $article:
    var $p=document.createElement('p');
    $p.innerText= $comment.value;
    $p.classList.add('comment');
    $article.appendChild($p);
    //3. add footer with text to $article:
    var $footer= document.createElement('footer');
    $footer.innerText=$author.value;
    $article.appendChild($footer);*/

    //4. add $article to $comments:
    $comments.appendChild($article);
}

var $searchInput = document.querySelector('input[name="search"]');

function onSearch(event) {
    console.dir(event);
    console.log($searchInput.value);
}

function onSearchInputChange(event) {
    console.log(event);
    console.log($searchInput.value);
}


function showCommentIndex(index) {
    console.log(index);
}



// event which triggers when document is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('document is loaded');
    //pentru a aduce comentariile din DB:
    var comments = getDataFromDB();
    console.log(comments);
    //listarea comentariilor in DOM:
    listComments(comments);

    //pentru a stopa efectul de refresh al paginii cand dam submit, vom pune un eveniment pe 'form':
    var $form = document.querySelector('form');
    $form.addEventListener('submit', addComment);

    $searchButton = document.querySelector('.search');
    $searchButton.addEventListener('click', onSearch);

    // input event triggres when typing in the input field or when it changes
    $searchInput.addEventListener('input', onSearchInputChange);

   
});

