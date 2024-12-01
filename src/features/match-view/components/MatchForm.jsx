import { useState } from 'react';
import { Button, Input } from "../../../components";

export const MatchForm = () => {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');


    return (
        <div className="match-form">
            <h2>Start a New Match</h2>
            <Input
                type="text"
                placeholder="Home Team"
                value={homeTeam}
                onChange={(e) => setHomeTeam(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Away Team"
                value={awayTeam}
                onChange={(e) => setAwayTeam(e.target.value)}
            />
            <Button>Start Match</Button>
        </div>
    );
};
