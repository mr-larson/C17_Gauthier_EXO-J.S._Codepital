//-----------------  Exo CodePital  -----------------
//---------- class -------------- 

//patient
class Patient{
    constructor(nom, maladie, argent, traitement, etatSante){
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.etatSante = etatSante
        this.poche = []
        this.goTo = (depart, destination) => {
            destination.patient.push(this)
            depart.patient.splice (depart.patient.indexOf(this),1)
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
("Marcus", "mal indente", 100, "", "malade", [])
let p2 = new Patient 
("Optimus", "Unsave", 200, "", "malade", [])
let p3 = new Patient 
("Sangoku", "404", 80, "", "malade", [])
let p4 = new Patient 
("DarthVader", "azmatique", 110, "", "malade", [])
let p5 = new Patient 
("semicolon", "syntaxError", 100, "", "malade", [])

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
            case "Mal indente":
                malade.traitement = ctrl
                break
            case "unsave":
                malade.traitement = save
                break
            case "404":
                malade.traitement = check
                break
            case "azmatique":
                malade.traitement = vento
                break
            case "syntaxError":
                malade.traitement = f12
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

//traitement
let t1 = new Traitement ("ctrl+maj+f", 60)
let t2 = new Traitement ("saveOnFocusChange", 100)
let t3 = new Traitement ("CheckLinkRelation", 35)
let t4 = new Traitement ("Ventoline", 40)
let t5 = new Traitement ("F12+doc", 20)



//------------ Console.log -------------
console.log (p1, p2, p3, p4, p5)
doctor.patientIn(p1)
console.log(doctor.salleAttente.personne)
console.log(p1)
doctor.diagnostique(p1)
console.log(p1)
doctor.patientOut(p1)
console.log(doctor.salleAttente.personne)