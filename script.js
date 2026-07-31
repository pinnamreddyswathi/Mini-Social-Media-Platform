// Register User


function register(){


let user={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


password:
document.getElementById("password").value,


followers:0


};


localStorage.setItem(
"user",
JSON.stringify(user)
);


alert("Account Created");


}



// Login


function login(){


let user=
JSON.parse(localStorage.getItem("user"));



let email=
document.getElementById("loginEmail").value;



let password=
document.getElementById("loginPassword").value;



if(user.email==email &&
user.password==password){


localStorage.setItem(
"login",
"true"
);


alert("Login Successful");


location.href="index.html";


}

else{


alert("Invalid Details");


}


}



// Create Post


function createPost(){


let text=
document.getElementById("postText").value;



let posts=
JSON.parse(
localStorage.getItem("posts")
)||[];



posts.push({

text:text,

likes:0,

comments:[]

});



localStorage.setItem(
"posts",
JSON.stringify(posts)
);



displayPosts();


}




// Display Posts


function displayPosts(){


let posts=
JSON.parse(
localStorage.getItem("posts")
)||[];



let output="";



posts.forEach((p,index)=>{


output +=

`
<div class="post">


<h3>User</h3>


<p>${p.text}</p>


<button onclick="like(${index})">

❤️ ${p.likes}

</button>


<br>


<input id="comment${index}"
placeholder="Comment">


<button onclick="comment(${index})">

Comment

</button>



<div>

${p.comments.join("<br>")}

</div>


</div>

`;



});



if(document.getElementById("posts"))

document.getElementById("posts").innerHTML=output;



}




// Like System


function like(index){


let posts=
JSON.parse(localStorage.getItem("posts"));



posts[index].likes++;


localStorage.setItem(
"posts",
JSON.stringify(posts)
);



displayPosts();


}



// Comments


function comment(index){


let posts=
JSON.parse(localStorage.getItem("posts"));



let c=
document.getElementById(
"comment"+index
).value;



posts[index].comments.push(c);



localStorage.setItem(
"posts",
JSON.stringify(posts)
);



displayPosts();


}



// Follow System


function followUser(){


let user=
JSON.parse(
localStorage.getItem("user")
);



user.followers++;



localStorage.setItem(
"user",
JSON.stringify(user)
);



showProfile();


}



// Profile


function showProfile(){


let user=
JSON.parse(
localStorage.getItem("user")
);



if(document.getElementById("username")){


document.getElementById("username")
.innerHTML=user.name;


document.getElementById("followers")
.innerHTML=user.followers;


}


}



displayPosts();

showProfile();
