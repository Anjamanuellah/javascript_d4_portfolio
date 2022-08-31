var profil1 = {
    image : "cat.png",
    pays : "Madagascar",
    tel : "0343650241",
    poste : "Developpeur Web",
    name : "Anja RABEMANANJARA",
    bouton : "My Portfolio"
}
var paysClass = document.getElementById("pays_container");
var telClass = document.getElementById("tel_container");
var imageClass = document.getElementById("image");
var posteClass = document.getElementById("poste");
var nameClass = document.getElementById("name");
var buttonClass = document.getElementById("portfolio");

paysClass.innerText = profil1.pays;
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
    education : "2017-2018 : bacc série D <br> Lycée Privée St Jean Bosco <br> 2019-2021 : L2 en Biologie <br> Université d' Antananarivo",
    experience : "TAFA2.0 <br> Formation en developement Web chez P4H depuis Mai 2022",
 }

var educationClass = document.getElementById("education_container")
var experienceClass = document.getElementById("experiences_container")

experienceClass.innerHTML= profil3.experience;
educationClass.innerHTML = profil3.education;




