import React, { useState } from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import data from '../../data.json'; // Assuming data is imported correctly

const Hero = ({ selectedType, selectedDeveloper, setSelectedDeveloper, setSelectedType }) => {
    const [isOpenDeveloper, setIsOpenDeveloper] = useState(false);
    const [isOpenType, setIsOpenType] = useState(false);

    const handleDeveloperClick = (developer) => {

        setSelectedDeveloper(developer);
        setIsOpenDeveloper(false);
    };

    const handleTypeClick = (type) => {

        setSelectedType(type);
        setIsOpenType(false);
    };

    
    const developers = [...new Set(data.properties.map(elem => elem.developer))];
    const types = [...new Set(data.properties.map(elem => elem.property_type))];

    return (
        <div className='flex justify-center flex-col items-center py-10 mt-10'>
            <h1 className='text-bolder text-6xl font-metrophobic'>Discover the Best Properties</h1>
            <div className="options flex gap-6 mt-10">
                <div className="option cursor-pointer">
                    <p className='uppercase text-center text-gray-400'>Developer</p>
                    <div className="dropdown">
                        <div
                            className="type text-lg border rounded-lg px-4 py-1 border-black flex gap-4 items-center"
                            onClick={() => {
                                setIsOpenDeveloper(!isOpenDeveloper);
                                setIsOpenType(false); 
                            }}
                        >
                            {selectedDeveloper} {isOpenDeveloper ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </div>
                        {isOpenDeveloper && (
                            <div className="options cursor-pointer ml-3 mt-3 overflow-hidden transition-all bg-black text-white rounded-lg">
                                {developers.map((developer, index) => (
                                    <p
                                        key={index}
                                        onClick={() => handleDeveloperClick(developer)}
                                        className={`p-2 hover:bg-gray-600 ${selectedDeveloper === developer ? 'bg-gray-600 text-white' : ''}`}
                                    >
                                        {developer}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="option cursor-pointer">
                    <p className='uppercase text-center text-gray-400'>Type</p>
                    <div className="dropdown">
                        <div
                            className="type text-lg border rounded-lg px-4 py-1 border-black flex gap-4 items-center"
                            onClick={() => {
                                setIsOpenType(!isOpenType);
                                setIsOpenDeveloper(false); 
                            }}
                        >
                            {selectedType} {isOpenType ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </div>
                        {isOpenType && (
                            <div className="options cursor-pointer ml-3 mt-3 overflow-hidden transition-all bg-black text-white rounded-lg">

                                {types.map((type, index) => (
                                    <p
                                        key={index}
                                        onClick={() => handleTypeClick(type)}
                                        className={`p-2 hover:bg-gray-600 ${selectedType === type ? 'bg-gray-600 text-white' : ''}`}
                                    >
                                        {type}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
