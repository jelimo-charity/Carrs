import React from 'react';
import './cars.css'; // Import the CSS file

const Cars = () => {
  const cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
      price: '$50/day',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2024-toyota-camry-102-64cbc4858e198.jpg?crop=0.469xw:0.527xh;0.332xw,0.190xh&resize=768:*'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Accord',
      year: 2019,
      price: '$55/day',
      image: 'https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg'
    },
    {
        id: 1,
        brand: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: '$50/day',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-toyota-camry-102-64cbc4858e198.jpg?crop=0.469xw:0.527xh;0.332xw,0.190xh&resize=768:*'
      },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
      price: '$70/day',
      image: 'https://www.topgear.com/sites/default/files/2023/07/24Mustang_Media_drive%20LA_23.jpg'
    },
    {
        id: 3,
        brand: 'Ford',
        model: 'Mustang',
        year: 2021,
        price: '$70/day',
        image: 'https://www.topgear.com/sites/default/files/2023/07/24Mustang_Media_drive%20LA_23.jpg'
      },
      {
        id: 1,
        brand: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: '$50/day',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-toyota-camry-102-64cbc4858e198.jpg?crop=0.469xw:0.527xh;0.332xw,0.190xh&resize=768:*'
      },
      {
        id: 3,
        brand: 'Ford',
        model: 'Mustang',
        year: 2021,
        price: '$70/day',
        image: 'https://www.topgear.com/sites/default/files/2023/07/24Mustang_Media_drive%20LA_23.jpg'
      },
      {
        id: 3,
        brand: 'Ford',
        model: 'Mustang',
        year: 2021,
        price: '$70/day',
        image: 'https://www.topgear.com/sites/default/files/2023/07/24Mustang_Media_drive%20LA_23.jpg'
      },
      {
        id: 1,
        brand: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: '$50/day',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2024-toyota-camry-102-64cbc4858e198.jpg?crop=0.469xw:0.527xh;0.332xw,0.190xh&resize=768:*'
      },
    // Add more cars here
  ];

  return (
    <div className="cars-container">
      <h1>Our Cars</h1>
      <div className='carsContainer'>
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={`${car.brand} ${car.model}`} className="car-image" />
            <h2 className="car-brand">{car.brand} {car.model} ({car.year})</h2>
            <p className="car-price">Price: {car.price}</p>
            {/* Add more details here like descriptions, buttons for booking, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
