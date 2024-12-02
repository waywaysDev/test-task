import { render, screen, fireEvent } from '@testing-library/react';
import { MatchForm } from "../components";

describe('MatchForm Component', () => {
    it('should render correctly', () => {
        render(<MatchForm startMatch={() => {}} />);
        expect(screen.getByPlaceholderText('Home Team')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Away Team')).toBeInTheDocument();
        expect(screen.getByText('Start Match')).toBeInTheDocument();
    });

    it('should call startMatch with correct values', () => {
        const mockStartMatch = jest.fn();
        render(<MatchForm startMatch={mockStartMatch} />);
        fireEvent.change(screen.getByPlaceholderText('Home Team'), { target: { value: 'Team A' } });
        fireEvent.change(screen.getByPlaceholderText('Away Team'), { target: { value: 'Team B' } });
        fireEvent.click(screen.getByText('Start Match'));
        expect(mockStartMatch).toHaveBeenCalledWith('Team A', 'Team B');
    });
});
