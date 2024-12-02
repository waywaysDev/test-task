import React, { useState } from 'react';
import {Button, Input} from "../../../components";

export const MatchScoreUpdateForm = ({ match, updateMatchScore, onCancel }) => {
    const [homeScore, setHomeScore] = useState(match.homeScore);
    const [awayScore, setAwayScore] = useState(match.awayScore);

    const handleSaveScore = () => {
        const homeScoreInt = parseInt(homeScore, 10);
        const awayScoreInt = parseInt(awayScore, 10);

        if (Number.isInteger(homeScoreInt) && homeScoreInt >= 0 && Number.isInteger(awayScoreInt) && awayScoreInt >= 0) {
            updateMatchScore(match.id, homeScoreInt, awayScoreInt);
            onCancel();
        } else {
            alert('Please enter valid positive digits for scores');
        }
    };

    return (
        <div className="match-form">
            <h3>Update Score for {match.homeTeam} vs {match.awayTeam}</h3>
            <Input
                type="number"
                placeholder="Home Team Score"
                value={homeScore}
                onChange={(e) => setHomeScore(e.target.value)}
                min="0"
            />
            <Input
                type="number"
                placeholder="Away Team Score"
                value={awayScore}
                onChange={(e) => setAwayScore(e.target.value)}
                min="0"
            />
            <div className="match-button-group">
                <Button onClick={handleSaveScore}>Save</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </div>
        </div>
    );
};