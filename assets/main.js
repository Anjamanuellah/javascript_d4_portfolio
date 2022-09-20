var profil1 = {
    image : "cat.png",
    tel : "034 36 502 41",  
    poste : "Developpeur Web",
    name : "Anja RABEMANANJARA",
    bouton : "My Portfolio",
}
var telClass = document.getElementById("tel_container");
var imageClass = document.getElementById("image");
var posteClass = document.getElementById("poste");
var nameClass = document.getElementById("name");
var buttonClass = document.getElementById("portfolio");

telClass.innerText = profil1.tel;
posteClass.innerText = profil1.poste;
nameClass.innerText = profil1.name;
buttonClass.innerText = profil1.bouton;

imageClass.setAttribute("src", profil1.image);

var profil2 = {
    myname : "Je suis Anja Manuellah",
    paragraphe : "Je suis une jeune passionnée de l'informatique,<br> que ce soit créatif ou organisationnelle et de tous ce qui concerne le developpement web. <br> Je suis en formation chez Passion 4 Humanity <br> Je serais disponible à la fin de mon cursus chez TAFA 2.0",
    button : "Download CV",
    skills : "My skills",
}

var skillsClass = document.getElementById("myskills_container")
var boutonClass = document.getElementById("download")
var paragrapheClass = document.getElementById("paragraphe_container")
var mynameClass = document.getElementById("myname_container")

skillsClass.innerText = profil2.skills;
mynameClass.innerText = profil2.myname;
paragrapheClass.innerHTML = profil2.paragraphe;
boutonClass.innerText = profil2.button;

 var profil3 = {
    firsteducation : "2017-2018 : bacc série D <br> Lycée Privée St Jean Bosco",
    secondeducation : " 2019-2021 : L2 en Biologie <br> Université d' Antananarivo",
    fisrtexperience : "Developpeur web junior chez P4h",
    secondexperience : "TAFA 2.0 <br> Formation en developement Web chez P4H depuis Mai 2022",
 }

var firsteducationClass = document.getElementById("education_container1")
var secondeducationClass = document.getElementById("education_container2")
var fisrtexperienceClass = document.getElementById("experiences_container1")
var secondexperienceClass = document.getElementById("experiences_container2")

firsteducationClass.innerHTML= profil3.firsteducation;
secondeducationClass.innerHTML = profil3.secondeducation;
fisrtexperienceClass.innerHTML = profil3.fisrtexperience;
secondexperienceClass.innerHTML = profil3.secondexperience;

function myFunction() {
    let element = document.getElementById("btn");
    if (element.innerText=="Dark mode") 
        element.innerText = "Ligth mode";
    else 
        element.innerText = "Dark mode";
    var body = document.body;
    body.classList.toggle("dark-mode");
    $(".container1").toggleClass('dark-mode'); 
    $(".container3").toggleClass('dark-mode'); 
}
