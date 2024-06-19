import React, { useEffect, useState } from 'react';
import data from '../../data.json'; 

import { CiLocationOn } from "react-icons/ci";

const Card = ({ selectedDeveloper, selectedType, setSelectedDeveloper, setSelectedType }) => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(9);

    useEffect(() => {
        let filteredProperties = data.properties.filter(elem => {
            if (selectedDeveloper && selectedDeveloper !== "All" && elem.developer !== selectedDeveloper) {
                return false;
            }
            if (selectedType && selectedType !== "All" && elem.property_type !== selectedType) {
                return false;
            }
            return true;
        });

        setFilteredProperties(filteredProperties);
        setCurrentPage(1); 
    }, [selectedDeveloper, selectedType]);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const resetFilters = () => {
        setSelectedDeveloper("All");
        setSelectedType("All");
        console.log(selectedType);
    };

    return (
        <>
            <div className="filter font-bold font-metrophobic mx-20 p-3 mb-3 border-t-0 border-x-0 flex justify-between border-b-2 border border-black">
                <div className="property-found flex items-center gap-2">
                    <p>{filteredProperties.length} Properties found</p>
                </div>
                <button className="reset border px-4 py-1" onClick={resetFilters}>
                    Reset Filter
                </button>
            </div>
            <div className="cardcontainer font-metrophobic px-5 grid md:grid-cols-3 place-items-center">
                {currentProperties.map(elem => (
                    <div key={elem.id} className='w-96 mt-4 px-7 rounded-lg overflow-hidden'>
                        <img src={`${elem.property_image}`} alt="" className='w-full bg-cover bg-center h-64 rounded-lg border border-black' />
                        <h1 className="title font-bold text-lg mt-2">{elem.title}</h1>
                        <div className="owner text-gray-500 mt-1">By {elem.developer}</div>
                        <div className="location flex items-center gap-4 mt-1 text-md"><CiLocationOn /><p>{elem.area}</p> </div>
                        <div className="price  flex gap-2 text-xl mt-1">
                            <p className='font-bold'>{elem.currency}</p><p className='font-bold'> {elem.property_price}</p>
                        </div>
                        <button className='px-3 w-full mt-2 mb-4 border border-black py-1 font-bold rounded-lg hover:bg-black hover:text-white transition-colors'>Contact</button>
                    </div>
                ))}
            </div>
            {filteredProperties.length > propertiesPerPage && (
                <div className="pagination flex justify-center mt-5">
                    {Array.from({ length: Math.ceil(filteredProperties.length / propertiesPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-4 py-2 mx-1 border border-black rounded-lg hover:bg-gray-200 ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Card;
