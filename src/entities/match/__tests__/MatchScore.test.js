import { MatchScore } from '../models';

describe('MatchScore Class', () => {
    let scoreboard;

    beforeEach(() => {
        scoreboard = new MatchScore();
    });

    it('should start a new match', () => {
        const id = scoreboard.startMatch('Team A', 'Team B');
        const expectedId = `Team A-Team B-${Date.now()}`;
        expect(scoreboard.matches.has(id)).toBe(true);
        expect(expectedId).toEqual(id);
    });

    it('should update match scores correctly', () => {
        const id = scoreboard.startMatch('Team A', 'Team B');
        scoreboard.updateScore(id, 2, 3);
        const match = scoreboard.matches.get(id);
        expect(match.homeScore).toBe(2);
        expect(match.awayScore).toBe(3);
    });

    it('should throw an error when updating score for a non-existent match', () => {
        expect(() => {
            scoreboard.updateScore('non-existent-id', 2, 3);
        }).toThrow('Match not found');
    });

    it('should finish a match', () => {
        const id = scoreboard.startMatch('Team A', 'Team B');
        scoreboard.finishMatch(id);
        expect(scoreboard.matches.has(id)).toBe(false);
    });

    it('should throw an error when finishing a non-existent match', () => {
        expect(() => {
            scoreboard.finishMatch('non-existent-id');
        }).toThrow('Match not found');
    });

    it('should return a sorted summary of ongoing matches', () => {
        const id1 = scoreboard.startMatch('Team A', 'Team B');
        const id2 = scoreboard.startMatch('Team C', 'Team D');
        scoreboard.updateScore(id1, 2, 2);
        scoreboard.updateScore(id2, 3, 3);
        const summary = scoreboard.getSummary();
        expect(summary.length).toBe(2);
        expect(summary[0].getTotalScore()).toBeGreaterThan(summary[1].getTotalScore());
    });
});