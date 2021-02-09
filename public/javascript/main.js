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
            depart.personnes.splice (depart.personnes.indexOf(this),1)
            destination.personnes.push(this)
            console.log (`${this.nom} va à ${destination.nom}`)
        }
        this.paye = (traitement) => {
            this.argent -= traitement.prix
        }
        this.mort = (etatSante) => {
            if (etatSante == "mort"){
                depart.personnes.splice (depart.personnes.indexOf(this),1)
                destination.personnes.push(lieu.cimetiere)
                console.log (`patient ${this.nom} est envoyer au cimetière`)
            }
        }
        
    }
}
//chat
class Chat{
    constructor(sphynx){
        this.sphynx = sphynx
        setInterval(() =>{
            console.log ("miaouss")
        }
        , 2000)
    }
}
//lieux
class Lieux{
    constructor(nom, personne){
        
    }
}

//----------- instance -----------

//Patient
let marcus = new Patient 
("Marcus","salleD", "mal indenté", 100, "", "malade", [])
let optimus = new Patient 
("Optimus","maison", "Unsave", 200, "", "malade", [])
let sangoku = new Patient 
("Sangoku","maison", "404", 80, "", "malade", [])
let darthVader = new Patient 
("DarthVader","maison", "azmatique", 110, "", "malade", [])
let semicolon = new Patient 
("semicolon","maison", "syntaxError", 100, "", "malade", [])

//Docteur
let doctor = {
    nom: "Docteur Mahboul",
    argent: 100,
    cabinet: [chat],
    salleDattente: [],
}

//Lieux
let pharmacie = new Lieu 
("pharmacie")
let salleDattente = new Lieu
("salleAttente")
let cabinet = new Lieu
("cabinet")
let cimetiere = new Lieu
("cimetière")
let maison = new Lieu
("maison")

    

