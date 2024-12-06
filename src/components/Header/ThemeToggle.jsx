import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = '#313131';
            document.body.style.color = "#fff";
        }
        else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = "#313131";
        }

    }, [isDarkMode]);

    const handleToggle = () => {
        setDarkMode((prev => !prev));
    }

    return (
        <div className="form-control">
            <label className="label justify-end cursor-pointer">
                <span className='mr-3'>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                <input type="checkbox" className="toggle" checked={isDarkMode} onChange={handleToggle} />
            </label>
        </div>
    );
};

export default ThemeToggle;