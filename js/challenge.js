const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const comments = document.getElementById("list");
const newCommentForm = document.getElementById("comment-form");

document.addEventListener("DOMContentLoaded", () => {
  newCommentForm.addEventListener("submit", createNewComment);
});

const createNewComment = event => {
  event.preventDefault();
  //stop form from trying to submit
  const comment = document.getElementById("comment-input");
  const newComment = document.createElement("li");
  newComment.innerText = comment.value;

  appendNewComment(newComment);
  event.target.reset();
};

const appendNewComment = comment => {
  comments.appendChild(comment);
};

minus.addEventListener("click",function(){
  let counter = document.getElementById("counter");
  let b = parseInt(counter.innerText);
  counter.innerText = b - 1
});

plus.addEventListener("click",function(){
  let a = document.getElementById("counter");
  let b = parseInt(a.innerText);
  a.innerText = b + 1
});

heart.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText),c=document.querySelector(".likes"),d=void 0;if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)})


pause.addEventListener("click", function() {
  playing ? (playing=!1,clearInterval(interval),this.innerText="resume") : (playing=!0,interval=timer(),this.innerText="pause"),
  [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach( function(a) {
    "pause"!==a.id&&(a.disabled=!playing)
  })
})


function _toConsumableArray(a){
  if(Array.isArray(a)){
    for(var b=0,c=Array(a.length);b<a.length;b++)
      c[b]=a[b];
      return c
    }
    return Array.from(a)
  }
  var playing=!0,
  timer=function(){
    return setInterval(function(){
      var a=document.getElementById("counter"),
      b=parseInt(a.innerText);
      a.innerText=b+1
    },1e3)
  }
  
  interval = timer();