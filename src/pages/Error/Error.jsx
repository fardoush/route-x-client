import React from 'react';
import errorImg from '../../assets/images/error.svg'
import { Link } from 'react-router';


const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            
           <div className="w-[358px] h-[444px]">
             <img src={errorImg} alt="" className="w-full h-full object-cover" />
           </div>
           <Link to='/' className='bg-secondary py-2 px-6 text-black font-medium rounded-lg'>Go Home</Link>
            

        </div>
    );
};

export default Error;