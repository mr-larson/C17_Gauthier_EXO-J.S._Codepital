//-----------------  Exo CodePital  -----------------
//---------- class -------------- 
//patient
class Patient{
    constructor(nom, lieu, maladie, argent, traitement, etatSante){
        this.nom = nom
        this.lieu = lieu
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
class chat{
    constructor(sphynx){
        this.sphynx = sphynx
        setInterval(() =>{
            console.log ("miaouss")
        }
        , 2000)
    }
}

//----------- instance -----------
//patient
let marcus = new Patient 
("Marcus","maison", "mal indenté", 100, "", "malade", [])
let optimus = new Patient 
("Optimus","", "Unsave", 200, "", "malade", [])
let sangoku = new Patient 
("Sangoku","salle d'attente", "404", 80, "", "malade", [])
let darthVader = new Patient 
("DarthVader","salle d'attente", "azmatique", 110, "", "malade", [])
let semicolon = new Patient 
("semicolon","salle d'attente", "syntaxError", 100, "", "malade", [])

//docteur
let doctor = {
    nom: "Docteur Maboul",
    argent: 100,
    cabinet: [],
    salleDattente: []
}

/* let lieu = new Lieu { 
    salleAttente:[],
    cabinet:[],
    pharmacie:[],
    cimetiere:[],
    maison:[]
} */
