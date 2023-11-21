console.log("hello world");






function dbx(a) {

  var rem = document.getElementsByClassName('remove');
  for (var p = 0; p < rem.length; p++) {
    rem[p].remove();
  }




  //    let pro = fetch(`https://inshorts.deta.dev/news?category=${a.value}`).then((reponse) => {
  //   console.log(reponse.status)
  //   console.log(reponse.ok)
  //   return reponse.json()
  //  }).then((value) => {

  //   // console.log(value);
  //   let x = Object.values(value);
  //   let data = x;
  //   console.log(data);
  //    return data;
  //  })

  ;
  let pro = fetch(`https://inshorts.deta.dev/news?category=${a.value}`).then((reponse) => {
    // console.log(reponse.status)
    // console.log(reponse.ok)
    return reponse.json()
  }).then((value) => {

    var s = value.data;
    // console.log(s);
    for (var i = 0; i < s.length; i++) {
      var auth = s[i].author;
      // console.log(auth);
      var content = s[i].content;
      // console.log(content);
      filling(auth, content);

    }
  })

  var parent = document.querySelector('.parent');
  function filling(auth, content) {

    // console.log(auth);
    // console.log(content);
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var p = document.createElement('p');
    var div = document.createElement('div');
    var l = document.createElement('i');
    l.setAttribute('class','fa-solid fa-heart myicon');
    l.setAttribute('onclick','saved(this)');
    div.setAttribute('class', 'textarea remove');
    span1.setAttribute('class', 'right');
    div.appendChild(span);
    div.appendChild(span1);
    div.appendChild(p);
    div.appendChild(l);
    parent.appendChild(div);
    span.innerHTML = "Author :" + auth;
    span1.innerHTML = "Category :" + a.innerHTML;
    p.innerHTML = content;
  }
}
var w =0;
function saved(a){
  var data = document.querySelector('.stored')

  var x = a.parentNode;
  data.appendChild(x);
  console.log(x);
  
}


// function storedNews(){
//   event.preventDefault();
//  var s = document.querySelector('.stored');
//  console.log(s); 
//  for(x in localStorage){
//   // var u = localStorage[x];
//   s.appendChild(localStorage[x]);
//  }
// }








//    
