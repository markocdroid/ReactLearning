import React from 'react';
import useFetch from './UseFetch';
import './FetchData.css';

const FetchYogaData = () => {
    const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
            <h1 className='usefetch_heading'>Yoga Benefits </h1>
            <ul className='list_data_main'>

                {data && data.map((value, index) => (
                    <>
                        <li key={index} className='list_data'>
                            <h3>{value.name}</h3>
                            <p><strong>{value.importance}</strong></p>
                            <p><strong>Benefits: </strong>{value.benefits}</p>
                            <p><strong>Duration: </strong>{value.time_duration}</p>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default FetchYogaData