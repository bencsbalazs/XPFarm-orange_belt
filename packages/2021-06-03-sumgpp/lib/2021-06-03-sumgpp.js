
export class NBAplayer {
    constructor(name, team, ppg) {
        this.name = name;
        this.team = team;
        this.ppg = ppg;
    }
}

export function sumppg(player1, player2) {return player1.ppg + player2.ppg;}