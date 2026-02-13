import React from 'react';

const SecurityAlert = ({ message }) => {
    return (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
            <strong>Security Alert:</strong> {message}
        </div>
    );
};

export default SecurityAlert;