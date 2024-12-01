import { render, screen, fireEvent } from '@testing-library/react';

describe('MatchView Integration', () => {
    const startMatch = (homeTeam, awayTeam) => {
        fireEvent.change(screen.getByPlaceholderText('Home Team'), { target: { value: homeTeam } });
        fireEvent.change(screen.getByPlaceholderText('Away Team'), { target: { value: awayTeam } });
        fireEvent.click(screen.getByText('Start Match'));
    };

    const updateScore = (homeScore, awayScore, action) => {
        fireEvent.click(screen.getByText('Update Score'));
        fireEvent.change(screen.getByPlaceholderText('Home Team Score'), { target: { value: homeScore } });
        fireEvent.change(screen.getByPlaceholderText('Away Team Score'), { target: { value: awayScore } });
        fireEvent.click(screen.getByText(action));
    };

    const finishMatch = () => {
        fireEvent.click(screen.getByText('Finish Match'));
    };

    it('should allow adding, updating, and finishing matches', () => {
        render(<MatchView />);

        startMatch('Team A', 'Team B');
        expect(screen.getByText('Team A 0 - 0 Team B')).toBeInTheDocument();

        updateScore('3', '2', 'Save');
        expect(screen.getByText('Team A 3 - 2 Team B')).toBeInTheDocument();

        finishMatch();
        expect(screen.queryByText('Team A 3 - 2 Team B')).not.toBeInTheDocument();
    });

    it('should cancel updating the score when the cancel button is clicked', () => {
        render(<MatchView />);

        startMatch('Team A', 'Team B');
        expect(screen.getByText('Team A 0 - 0 Team B')).toBeInTheDocument();

        updateScore('3', '2', 'Cancel');
        expect(screen.getByText('Team A 0 - 0 Team B')).toBeInTheDocument();
        expect(screen.queryByText('Team A 3 - 2 Team B')).not.toBeInTheDocument();
    });
});
