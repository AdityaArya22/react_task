import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

function App() {
    const [selectedDeveloper, setSelectedDeveloper] = useState('All');
    const [selectedType, setSelectedType] = useState('All');

    return (
        <>
            <Navbar />
            <Hero
                selectedDeveloper={selectedDeveloper}
                setSelectedDeveloper={setSelectedDeveloper}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <Card
                selectedDeveloper={selectedDeveloper}
                selectedType={selectedType}
                setSelectedDeveloper={setSelectedDeveloper} 
                setSelectedType={setSelectedType} 
            />
        </>
    );
}

export default App;
