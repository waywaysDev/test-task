import { useState } from 'react';
import { MatchScoreUpdateForm } from "./MatchScoreUpdateForm";
import { Button } from "../../../components";

export const MatchList = ({ matches, updateMatchScore, finishMatch }) => {
    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleUpdateScore = (match) => {
        setSelectedMatch(match);
    };

    return (
        <>
            <h2>Ongoing Matches</h2>
            {matches.length === 0 ? (
                <p>No ongoing matches</p>
            ) : (
                <>
                    {selectedMatch && (
                        <MatchScoreUpdateForm
                            match={selectedMatch}
                            updateMatchScore={updateMatchScore}
                            onCancel={() => setSelectedMatch(null)}
                        />
                    )}
                    {matches.map((match, index) => (
                        <div className="match-item" key={index}>
                            <span>{match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}</span>
                            <div className="match-button-group">
                                <Button onClick={() => handleUpdateScore(match)}>
                                    Update Score
                                </Button>
                                <Button onClick={() => finishMatch(match.id)}>
                                    Finish Match
                                </Button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};