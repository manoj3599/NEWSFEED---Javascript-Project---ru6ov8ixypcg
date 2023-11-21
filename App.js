console.log("hello world");

function dbx(a) {
    var rem = document.getElementsByClassName('remove');
    for (var p = 0; p < rem.length; p++) {
        rem[p].remove();
    }

    let pro = fetch(`https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews=${a.value}`).then((response) => {
        return response.json();
    }).then((value) => {
        var s = value.data;
        for (var i = 0; i < s.length; i++) {
            var auth = s[i].author;
            var content = s[i].content;
            filling(auth, content, a.innerHTML);
        }
    });

    var parent = document.querySelector('.parent');

    function filling(auth, content, category) {
        var span = document.createElement('span');
        var span1 = document.createElement('span');
        var p = document.createElement('p');
        var div = document.createElement('div');
        var l = document.createElement('i');
        l.setAttribute('class', 'fa-solid fa-heart myicon');
        l.setAttribute('onclick', 'saved(this)');
        div.setAttribute('class', 'textarea remove');
        span1.setAttribute('class', 'right');
        div.appendChild(span);
        div.appendChild(span1);
        div.appendChild(p);
        div.appendChild(l);
        parent.appendChild(div);
        span.innerHTML = "Author: " + auth;
        span1.innerHTML = "Category: " + category;
        p.innerHTML = content;
    }
}

var w = 0;

function saved(a) {
    var data = document.querySelector('.stored');
    var x = a.parentNode;
    data.appendChild(x);

    // Save to localStorage
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    var article = {
        author: x.querySelector('span').innerText.replace('Author:', '').trim(),
        category: x.querySelector('span.right').innerText.replace('Category:', '').trim(),
        content: x.querySelector('p').innerText.trim()
    };
    savedData.push(article);
    localStorage.setItem('savedData', JSON.stringify(savedData));
}

// Load saved data when the page loads
function loadSavedData() {
    var savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    var storedContainer = document.querySelector('.stored');
    storedContainer.innerHTML = '';

    savedData.forEach(function (article) {
        filling(article.author, article.content, article.category);
    });
}

// Call loadSavedData when the page loads
loadSavedData();
