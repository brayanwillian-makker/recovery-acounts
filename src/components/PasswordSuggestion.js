import React from 'react';

const PasswordSuggestion = () => {
    // Sample password suggestion logic
    const suggestions = [
        'Use a mix of upper and lower case letters',
        'Include numbers and special characters',
        'Avoid common words or phrase',
        'Make it at least 12 characters long'
    ];

    return (
        <div>
            <h2>Password Suggestions</h2>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordSuggestion;