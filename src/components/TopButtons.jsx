import React from 'react'

function TopButtons({setQuery}) {
    const cities =[
        {
            id:1,
            name:"London",
        },
        {
            id:2,
            name:"Tokyo",
        },
        {
            id:3,
            name:"Toronto",
        },
        {
            id:4,
            name:"Paris",
        },
        {
            id:5,
            name:"Mumbai",
        }
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) =>(
                <button key={city.id} className='text-white text-lg font-medium'
                onClick={() => setQuery({q : city.name})}>
                    {city.name}
                </button>
            ))}
        </div>
    ); 
}

export default TopButtons