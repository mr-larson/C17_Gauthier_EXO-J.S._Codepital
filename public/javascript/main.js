//-----------------  Exo CodePital  -----------------
//---------- class -------------- 

//patient
class Patient{
    constructor(nom, maladie, argent, etatSante){
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.etatSante = etatSante
        this.poche = []
        this.goTo = (depart, destination) => {
            destination.personne.push(this)
            depart.personne.splice (depart.personne.indexOf(this),1)
            console.log (`${this.nom} va à ${destination.nom}`)
        }
        this.paye = (pharmacie) => {
            if(this.argent >= this.traitement.prix){
                this.argent -= this.traitement.prix
                pharmacie.argent += this.traitement.prix
                console.log (`${this.nom} paie ${this.traitement.prix} à ${pharmacie.nom}`)
                this.goTo(pharmacie.personne, maison.personne)
                this.etatSante = "Bonne santé"
            }
            else if(this.argent < this.traitement.prix){
                this.goTo(pharmacie.personne, cimetiere.personne)
                this.etatSante = "Mort"
            }  
        }
        this.takeCare = (doctor) => {
            this.argent -= 50
            doctor.argent += 50
            console.log (`${this.nom} paie 50€ à ${doctor.nom}`)
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

//traitement
class Traitement{
    constructor(nom,prix){
        this.nom = nom
        this.prix = prix
    }
}

//----------- instance -----------

//Patient
let p1 = new Patient 
("Marcus", "mal indente", 100, "malade", [])
let p2 = new Patient 
("Optimus", "Unsave", 200, "malade", [])
let p3 = new Patient 
("Sangoku", "404", 80, "malade", [])
let p4 = new Patient 
("DarthVader", "azmatique", 110, "malade", [])
let p5 = new Patient 
("semicolon", "syntaxError", 100, "malade", [])

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

//traitement
let t1 = new Traitement ("ctrl+maj+f", 60)
let t2 = new Traitement ("saveOnFocusChange", 100)
let t3 = new Traitement ("CheckLinkRelation", 35)
let t4 = new Traitement ("Ventoline", 40)
let t5 = new Traitement ("F12+doc", 20)

//Docteur
let doctor = {
    nom: "Docteur Mahboul",
    argent: 100,
    cabinet: [chat],
    salleAttente: {
        nom: "salle d'attente",
        personne:[p1,p2,p3,p4,p5]
    },
    patientIn(malade){
        this.cabinet.push(malade)
        this.salleAttente.personne.splice(this.salleAttente.personne.indexOf(malade.nom),1)
        console.log (`${this.nom} fait entrer ${malade.nom} dans le cabinet`)
    },
    patientOut(malade){
        this.salleAttente.personne.push(malade)
        this.cabinet.splice(this.cabinet.indexOf(malade))
        console.log (`${this.nom} fait sortir ${malade.nom} du cabinet`)
    },
    diagnostique(malade){
        switch (malade.maladie){
            case "mal indente":
                malade.traitement = t1
                break
            case "unsave":
                malade.traitement = t2
                break
            case "404":
                malade.traitement = t3
                break
            case "azmatique":
                malade.traitement = t4
                break
            case "syntaxError":
                malade.traitement = t5
                break
        }
        console.log (`${malade.nom} est malade, il a ${malade.maladie}, `)
    }
}

//Lieux
let pharmacie = new Lieux
("pharmacie", [])
let cimetiere = new Lieux
("cimetière", [])
let maison = new Lieux
("maison", [])

//------------ Console.log -------------
do {
    //visite docteur
    let membre = doctor.salleAttente.personne[0]
    doctor.patientIn(membre)
    doctor.diagnostique(membre)
    p1.takeCare(doctor)
    doctor.patientOut(membre)
    membre.goTo(doctor.salleAttente, pharmacie )
    membre.paye(pharmacie)
}
while (doctor.salleAttente.personne.length > 0) {  
}
