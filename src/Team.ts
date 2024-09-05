
import Player from "./Player";

export class Team {

    teamName: string;
    players: Player[];
    


    //constructor
    constructor(teamName: string, players: Player[] ) {
        this.players = players;
        this.teamName = teamName;
    }


addPlayer(newPlayer:Player):void{
    this.players.push(newPlayer);
}

removePlayer(index: number): void{
    this.players.splice(index, 1 );
}

setActive(index: number, actOrInactive: boolean):void {
    this.players[index].active = actOrInactive;
} 


getPlayerCount() : number {
let playerCount :number = this.players.length;
return playerCount;
}

getActivePlayers(): Player[] {
let activePlayers: Player[] = [];
console.log("========Active Players=========");
    for(let i = 0; i < this.players.length; i++)
    {
        if(this.players[i].active === true)
        {
            
            
            console.log(this.players[i]);
            activePlayers.push(this.players[i]);
        }

    }

    return activePlayers;
}



}