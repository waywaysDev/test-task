describe('Match Class', () => {
    it('should initialize with correct properties', () => {
        const match = new Match('1', 'Team A', 'Team B');
        expect(match.id).toBe('1');
        expect(match.homeTeam).toBe('Team A');
        expect(match.awayTeam).toBe('Team B');
        expect(match.homeScore).toBe(0);
        expect(match.awayScore).toBe(0);
        expect(match.isOngoing()).toBe(true);
    });

    it('should update scores correctly', () => {
        const match = new Match('1', 'Team A', 'Team B');
        match.updateScore(2, 3);
        expect(match.homeScore).toBe(2);
        expect(match.awayScore).toBe(3);
    });

    it('should return total score', () => {
        const match = new Match('1', 'Team A', 'Team B');
        match.updateScore(2, 3);
        expect(match.getTotalScore()).toBe(5);
    });

    it('should handle isOngoing status correctly', () => {
        const match = new Match('1', 'Team A', 'Team B');
        match.updateScore(1, 2);
        expect(match.isOngoing()).toBe(true);
    });
});
