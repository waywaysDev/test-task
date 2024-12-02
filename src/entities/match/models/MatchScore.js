import { Match } from "./Match";

export class MatchScore {
    constructor() {
        this.matches = new Map();
    }

    startMatch(homeTeam, awayTeam) {
        const id = `${homeTeam}-${awayTeam}-${Date.now()}`;
        const newMatch = new Match(id, homeTeam, awayTeam);
        this.matches.set(id, newMatch);
        return id;
    }

    updateScore(id, homeScore, awayScore) {
        const match = this.matches.get(id);
        if (match) {
            match.updateScore(homeScore, awayScore);
        } else {
            throw new Error('Match not found');
        }
    }

    finishMatch(id) {
        if (this.matches.has(id)) {
            this.matches.delete(id);
        } else {
            throw new Error('Match not found');
        }
    }

    getSummary() {
        return Array.from(this.matches.values())
            .filter(match => match.isOngoing())
            .sort((a, b) => {
                const scoreComparison = b.getTotalScore() - a.getTotalScore();
                if (scoreComparison !== 0) return scoreComparison;
                return b.startTime - a.startTime;
            });
    }
}
