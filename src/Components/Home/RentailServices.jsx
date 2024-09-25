import React from 'react';

function RentailServices() {
    const rowLeft = [
        { rent: "Rent a Car in Kathmandu", href: "https://www.google.com"  },
        { rent: "Rent a Car in Lalitpur" },
        { rent: "Rent a Car in Bhaktapur" },
        { rent: "Rent a Car in Pokhara" , href: "https://www.google.com" },
        { rent: "Rent a Car in Dang" },
        { rent: "Rent a Car in Chitwan" , href: "https://www.google.com" }
    ];

    const rowRight = [
        { rent: "Rent a Car in Bharatpur" },
        { rent: "Rent a Car in Biratnagar", href: "https://www.google.com"  },
        { rent: "Rent a Car in Birgunj", href:"https://www.google.com" },
        { rent: "Rent a Car in Lumbini" , href: "https://www.google.com" },
        { rent: "Rent a Car in Dharan" , href: "https://www.google.com" },
        { rent: "Rent a Car in Butwal", href: "https://www.google.com"  }
    ];

    const rowCenter = [
        { rent: "Rent a Car in Dhangadhi" },
        { rent: "Rent a Car in Itahari" },
        { rent: "Rent a Car in Ilam" },
        { rent: "Rent a Car in Hetauda", href: "https://www.google.com" },
        { rent: "Rent a Car in Nepalgunj" , href: "https://www.google.com" },
        { rent: "Rent a Car in Gorkha" }
    ];

    return (
        <>
            <h1 className='text-center px-20 pt-12 md:pt-24 lg:pt-36 text-2xl md:text-3xl lg:text-4xl font-bold text-[#34a937]'>
                Car Rental Service in Nepal
            </h1>
            <div className='flex md:flex-row flex-col gap-4 pt-8 px-10 md:px-16 lg:px-32'>
                {/* Left Column */}
                <div className='w-full  md:w-1/3 lg:w-1/3'>
                    {rowLeft.map((item, index) => (
                        <div key={index} className='mb-2 px-2 md:px-6 lg:px-14'>
                            {item.href ? (
                                <a href={item.href} className="text-[#34a937]" target='_blank' rel='noopener noreferrer'>
                                    {item.rent}
                                </a>
                            ) : (
                                <p className=''>{item.rent}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Center Column */}
                <div className='w-full md:w-1/3 lg:w-1/3'>
                    {rowCenter.map((item, index) => (
                        <div key={index} className='mb-2 px-2 md:px-6 lg:px-14'>
                            {item.href ? (
                                <a href={item.href} className="text-[#34a937]" target='_blank' rel='noopener noreferrer'>
                                    {item.rent}
                                </a>
                            ) : (
                                <p>{item.rent}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className='w-full md:w-1/3 lg:w-1/3'>
                    {rowRight.map((item, index) => (
                        <div key={index} className='mb-2 px-2 md:px-6 lg:px-14'>
                            {item.href ? (
                                <a href={item.href} className="text-[#34a937]" target='_blank' rel='noopener noreferrer'>
                                    {item.rent}
                                </a>
                            ) : (
                                <p>{item.rent}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RentailServices;
