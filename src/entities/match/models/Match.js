export class Match {
    constructor(id, homeTeam, awayTeam) {
        this.id = id;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = 0;
        this.awayScore = 0;
        this.startTime = Date.now();
    }

    updateScore(homeScore, awayScore) {
        this.homeScore = homeScore;
        this.awayScore = awayScore;
    }

    getTotalScore() {
        return this.homeScore + this.awayScore;
    }

    isOngoing() {
        return this.homeScore >= 0 && this.awayScore >= 0;
    }
}