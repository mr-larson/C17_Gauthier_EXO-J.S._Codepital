//-----------------  Exo CodePital  -----------------
//---------- class -------------- 

//patient
class Patient{
    constructor(nom, maladie, argent, traitement, etatSante){
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.traitement = traitement
        this.etatSante = etatSante
        this.poche = []
        this.goTo = (depart, destination) => {
            destination.Patient.push(this)
            depart.Patient.splice (depart.Patient.indexOf(this),1)
            console.log (`${this.nom} va à ${destination.nom}`)
        }
        this.paye = (docteur) => {
            this.argent -= 50
            docteur.argent += 50
            console.log (`${this.nom} paie 50€ à ${docteur.nom}`)
        }
        this.takeCare = () => {
            if(Lieux.pharmacie.indexOf(this) != -1){
                if(this.argent >= this.traitement){
                    console.log(`${this.nom} a assez d'argent pour son traitement `)
                    this.etatSante = "Bonne santé"
                    this.argent -= this.traitement
                    this.goTo(Lieux.pharmacie, Lieux.maison)
                } else {
                    console.log(`${this.nom}  n'a pas assez d'argent pour son traitement `)
                    this.etatSante = "Mort"
                    this.goTo(Lieux.pharmacie, Lieux.cimetiere)
                }
                console.log(`L'état du patient est: ${this.etatSante}.`)
            } else {
                console.log("Le patient n'est pas à la Pharmacie.")
            }
        }
    }
}

//lieux
class Lieux{
    constructor(nom, personne){
        this.nom = nom
        this.personne = personne
    }
}

//----------- instance -----------

//Patient
let p1 = new Patient 
("Marcus","maison", "mal indenté", 100, "", "malade", [])
let p2 = new Patient 
("Optimus","maison", "Unsave", 200, "", "malade", [])
let p3 = new Patient 
("Sangoku","maison", "404", 80, "", "malade", [])
let p4 = new Patient 
("DarthVader","maison", "azmatique", 110, "", "malade", [])
let P5 = new Patient 
("semicolon","maison", "syntaxError", 100, "", "malade", [])

//le chat
let chat = {
    nom: "chat",
    miauler(){
        setInterval(() =>{
            console.log ("miaouss")
        }
        , 2000)
    }
}

//Docteur
let doctor = {
    nom: "Docteur Mahboul",
    argent: 100,
    cabinet: [chat],
    salleAttente: [],
}

//Localisation Lieux
let lieux = {
    pharmacie: [],
    cimetiere: [],
    maison: []
}

//Lieux
let pharmacie = new Lieux
("pharmacie")
let salleAttente = new Lieux
("salleAttente")
let cabinet = new Lieux
("cabinet")
let cimetiere = new Lieux
("cimetière")
let maison = new Lieux
("maison")

//traitement
let traitement = {
    "ctrl+maj+f": 60,
    "saveOnFocusChange": 100,
    "CheckLinkRelation": 35,
    "Ventoline": 40,
    "f12+doc": 20,
}   

//------------ Console.log -------------
console.log (p1, p2, p3,p4,p5)
console.log (doctor)
console.log (chat)

console.log(Lieux)