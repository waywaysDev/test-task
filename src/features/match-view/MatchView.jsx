import { useState } from 'react';
import { MatchScore } from '../../entities/match';
import { MatchList, MatchForm } from './components';

import './styles.css';

export const MatchView = () => {
    const [scoreboard] = useState(new MatchScore());
    const [matches, setMatches] = useState([]);

    const startMatch = (homeTeam, awayTeam) => {
        const id = scoreboard.startMatch(homeTeam, awayTeam);
        setMatches(prevMatches => [
            ...prevMatches,
            { id, homeTeam, awayTeam, homeScore: 0, awayScore: 0 }
        ]);
    };

    const updateMatchScore = (id, homeScore, awayScore) => {
        scoreboard.updateScore(id, homeScore, awayScore);
        setMatches([...scoreboard.getSummary()]);
    };

    const finishMatch = (id) => {
        try {
            scoreboard.finishMatch(id);
            setMatches(prevMatches => prevMatches.filter(match => match.id !== id));
        } catch (error) {
            console.error("Error finishing match:", error);
        }
    };

    return (
        <div className="match-view">
            <h1>Live Football World Cup Scoreboard</h1>
            <MatchForm startMatch={startMatch} />
            <MatchList
                matches={matches}
                updateMatchScore={updateMatchScore}
                finishMatch={finishMatch}
            />
        </div>
    );
}
