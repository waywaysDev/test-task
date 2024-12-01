import { render, screen, fireEvent } from '@testing-library/react';

describe('MatchList Component', () => {
    const matches = [
        { id: '1', homeTeam: 'Team A', awayTeam: 'Team B', homeScore: 1, awayScore: 2 },
    ];

    const updateMatchScore = jest.fn();
    const finishMatch = jest.fn();

    it('should render matches correctly', () => {
        render(<MatchList matches={matches} updateMatchScore={() => {}} finishMatch={() => {}} />);
        expect(screen.getByText('Team A 1 - 2 Team B')).toBeInTheDocument();
    });

    it('should call updateMatchScore with correct values', () => {
        render(<MatchList matches={matches} updateMatchScore={updateMatchScore} finishMatch={() => {}} />);
        fireEvent.click(screen.getByText('Update Score'));

        fireEvent.change(screen.getByPlaceholderText('Home Team Score'), { target: { value: '3' } });
        fireEvent.change(screen.getByPlaceholderText('Away Team Score'), { target: { value: '4' } });
        fireEvent.click(screen.getByText('Save'));

        expect(updateMatchScore).toHaveBeenCalledWith('1', 3, 4);
    });

    it('should call finishMatch with correct id', () => {
        render(<MatchList matches={matches} updateMatchScore={() => {}} finishMatch={finishMatch} />);
        fireEvent.click(screen.getByText('Finish Match'));
        expect(finishMatch).toHaveBeenCalledWith('1');
    });
});