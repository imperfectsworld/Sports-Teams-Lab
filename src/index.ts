import Player from "./Player"
import { Team } from "./Team"

//Pistons
let Ben: Player = {name: "Ben Wallace", jersey: 3, active: true}
let Chauncy: Player = {name: "Chauncey Billups", jersey: 1, active: true}
let Rip: Player = {name: "Richard Hamilton", jersey: 32, active: true}
let Tayshaun: Player = {name: "Tayshaun Prince", jersey: 22, active: true}
let Rahsheed: Player = {name: "Rasheed Wallace", jersey: 30, active: true}
let Lindsay: Player = {name: "Lindsey Hunter", jersey: 10, active: false}
let Darko: Player = {name: "Darko Millicic", jersey: 31, active: false}

let Pistons: Team = new Team ("Pistons", [Ben,Chauncy,Rip,Tayshaun,Rahsheed,Lindsay]);

let Doogy: Player = {
    name: "Doogie Howser, MD", 
    jersey: 69, 
    active: false
};

let Lewis: Player = {name: "Lewis Hamilton", jersey: 44, active: true};
let Billy: Player = {name: "Billy Madison", jersey: 8, active: true};
let Seb: Player = {name: "Sebastian Vettel", jersey: 5, active: true};
let Alonso: Player = {name: "Albon Alonso", jersey: 14, active: true};
let Max: Player = {name: "Max Verstappen", jersey: 1, active: true};

let GCClowns: Team = new Team("GC Clowns", [Doogy, Lewis, Billy, Seb, Alonso, Max]);


//Testing


Pistons.getActivePlayers();
Pistons.addPlayer(Seb);  //adds seb to pistons roster
console.log("\n");
Pistons.getActivePlayers();


GCClowns.getActivePlayers();
GCClowns.removePlayer(2); //removes seb
GCClowns.setActive(3, false); //makes max inactive
GCClowns.getActivePlayers();