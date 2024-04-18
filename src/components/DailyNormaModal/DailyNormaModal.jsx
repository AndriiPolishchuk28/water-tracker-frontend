import React, { useState } from 'react';


export const DailyNormaModal = ({ onClose, currentNorm }) => {
    const [newNorm, setNewNorm] = useState(currentNorm);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        onClose(newNorm);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <form onSubmit={handleSubmit}>
                <label>
                    
                    <input type="number" value={newNorm} onChange={e => setNewNorm(e.target.value)} />
                </label>
                <button type="submit"></button>
            </form>
        </div>
    );
};