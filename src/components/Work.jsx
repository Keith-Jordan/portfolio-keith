import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2023,
        title: 'Started Learning Front End Development',
        duration: '1 year and counting',
        details: 'Embarking on the journey to master front-end development, and learn as much as I can!'
    },
    {
        year: 2021,
        title: 'Premium Waters',
        duration: '3 years',
        details: 'Currently working at Premium Waters Inc. as an Inventory Control Clerk.'
    },
    {
        year: 2020,
        title: 'Heritage Auctions',
        duration: '1 year',
        details: 'Worked at Heritage Acutions House in the comics and animation department.'
    },
    {
        year: 2017,
        title: 'Del Friscos Grille',
        duration: '3 years',
        details: 'Worked as a waiter at Del Friscos'
    },
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001]'>Work</h1>
            {data.map ((item, idx) => (
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} />
            ))}
        </div>
    )

}

export default Work