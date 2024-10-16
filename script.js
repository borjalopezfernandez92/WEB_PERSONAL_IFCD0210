
function message(){
    erase();
    let text = document.createTextNode("Thank you. Now take a seat and you'll be contacted soon.");
    let tag = document.createElement("p");
    tag.setAttribute("id", "message");
    tag.appendChild(text);
    let cont = document.getElementsByClassName("messCont")[0];
    cont.appendChild(tag);
}

function erase(){
    let mess = document.getElementsByClassName("messCont")[0];
    mess.innerHTML = "";
}