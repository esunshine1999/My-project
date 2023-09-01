
document.getElementById("image").onclick = function(){
    document.getElementById("everything").style.backgroundColor = 'black'
    document.getElementById("html").style.color = '#fff'
    document.getElementById("tate").style.color = 'red'
    document.getElementById("h1").style.color = '#fff'
    document.getElementById("paragraph").style.color = '#ababab'
    document.getElementById("skills").style.color = 'red'
    document.getElementById("education").style.color = 'red'
    document.getElementById("experience").style.color = 'red'
    document.getElementById("cake").style.color = 'rgb(251, 106, 2)'
    document.getElementById("r").style.color = 'rgb(251, 106, 2)'
    document.getElementById("cs").style.color = 'rgb(251, 106, 2)'
    document.getElementById("c").style.color = 'rgb(251, 106, 2)'
    document.getElementById("css").style.color = 'rgb(251, 106, 2)'
    document.getElementById("js").style.color = 'rgb(251, 106, 2)'
    document.getElementById("run").style.color = 'rgb(251, 106, 2)'
    document.getElementById("i").style.color = '#fff'
    document.getElementById("spa").style.color = '#fff'
    document.getElementById("ap").style.color = '#fff'
    document.getElementById("a").style.color = '#fff'
    document.getElementById("j").style.color = 'rgb(251, 106, 2)'
    document.getElementById("ru").style.color = 'rgb(251, 106, 2)'
    document.getElementById("s").style.color = 'rgb(251, 106, 2)'
    document.getElementById("w").style.color = '#fff'
    document.getElementById("b").style.color = '#fff'
    document.getElementById("game").style.color = '#fff'
    document.getElementById("contactme").style.color = '#fff'
}

document.getElementById("babe").onclick = function(){
    document.getElementById("everything").style.backgroundColor = '#fff'
    document.getElementById("html").style.color = 'black'
    document.getElementById("tate").style.color = 'black'
    document.getElementById("h1").style.color = 'black'
    document.getElementById("paragraph").style.color = 'black'
    document.getElementById("skills").style.color = 'blue'
    document.getElementById("experience").style.color = 'blue'
    document.getElementById("education").style.color = 'blue'
    document.getElementById("id").style.color = 'black'
    document.getElementById("face").style.color = 'black'
    document.getElementById("app").style.color = 'black'
    document.getElementById("css").style.color = 'red'
    document.getElementById("js").style.color = 'red'
    document.getElementById("run").style.color = 'red'
    document.getElementById("cake").style.color = 'red'
    document.getElementById("r").style.color = 'red'
    document.getElementById("cs").style.color = 'red'
    document.getElementById("c").style.color = 'red'
    document.getElementById("ru").style.color = 'red'
    document.getElementById("j").style.color = 'red'
    document.getElementById("s").style.color = 'red'
    document.getElementById("w").style.color = 'black'
    document.getElementById("b").style.color = 'black'
}

document.getElementById("late").onclick = function(){
    document.getElementById("everything").style.backgroundColor = 'rgb(44, 68, 68)'
    document.getElementById("html").style.color = 'black'
    document.getElementById("tate").style.color = 'blue'
    document.getElementById("h1").style.color = 'chocolate'
    document.getElementById("paragraph").style.color = 'rgb(251, 106, 2)'
    document.getElementById("skills").style.color = 'rgb(251, 106, 2)'
    document.getElementById("education").style.color = 'rgb(251, 106, 2)'
    document.getElementById("experience").style.color = 'rgb(251, 106, 2)'
    document.getElementById("id").style.color = '#fff'
    document.getElementById("css").style.color = 'rgb(251, 106, 2)'
    document.getElementById("js").style.color = 'rgb(251, 106, 2)'
    document.getElementById("run").style.color = 'rgb(251, 106, 2)'
    document.getElementById("i").style.color = '#fff'
    document.getElementById("ap").style.color = '#fff'
    document.getElementById("a").style.color = '#fff'
    document.getElementById("cake").style.color = 'rgb(251, 106, 2)'
    document.getElementById("r").style.color = 'rgb(251, 106, 2)'
    document.getElementById("cs").style.color = 'rgb(251, 106, 2)'
    document.getElementById("c").style.color = 'rgb(251, 106, 2)'
    document.getElementById("v").style.color = '#fff'
    document.getElementById("ru").style.color = 'rgb(251, 106, 2)'
    document.getElementById("j").style.color = 'rgb(251, 106, 2)'
    document.getElementById("s").style.color = 'rgb(251, 106, 2)'
    document.getElementById("w").style.color = '#fff'
    document.getElementById("b").style.color = '#fff'
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}