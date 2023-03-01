import React, { useEffect, useState } from 'react';

const TrafficLights = () => {
    const [light, setLight] = useState(0);
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (active) {
            setLight(light => {
                // 1st line green light & other red for 5 seconds
                if (light === 0) {
                    setTimeout(() => {
                        setLight(1)
                    }, 5000)
                } else if (light === 1) {
                    // 1st line yellow light & other red for 1 second
                    setTimeout(() => {
                        setLight(2)
                    }, 1000)
                } else if (light === 2) {
                    // 2nd line light green & other red for 5 seconds
                    setTimeout(() => {
                        setLight(3)
                    }, 5000)
                } else if (light === 3) {
                    // 2nd line light yellow & other red for 1 second
                    setTimeout(() => {
                        setLight(4)
                    }, 1000)
                } else if (light === 4) {
                    // 3rd line light green & other red for 5 second
                    setTimeout(() => {
                        setLight(5)
                    }, 5000)
                } else if (light === 5) {
                    // 3nd line light yellow & other red for 1 second
                    setTimeout(() => {
                        setLight(6)
                    }, 1000)
                } else if (light === 6) {
                    // 4th line light green & other red for 5 second
                    setTimeout(() => {
                        setLight(7)
                    }, 5000)
                } else {
                    // 4th line light yellow & other red for 1 second
                    setTimeout(() => {
                        setLight(0)
                    }, 1000)
                }
                return light;
            });
        }
    }, [light, active]);

    const handleStart = () => {
        setActive(true);
        setLight(0)
    }

    const handleStop = () => {
        setActive(false);
    }


    return (
        <div className='py-16 px-80'>
            {/* Lane 2 */}
            <div className='flex justify-center  items-center mr-16'>
                <p className='text-lg font-bold pr-2'>Lane 2</p>

                <div className='border-4  border-black'>
                    <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 2 ? 'bg-green-500' : 'custom-color'}`}></div>
                    <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full ${light === 3 ? 'bg-yellow-300' : 'custom-color'}`}></div>
                    <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 0 || light === 1 || light === 4 || light === 5 || light === 6 || light === 7 ? 'bg-red-500' : 'custom-color'}`}></div>

                </div>
            </div>
            {/* lane 1 & 3 */}
            <div className='flex justify-between items-center'>
                {/* Lane 1 */}
                <div className='flex  items-center'>
                    <div className='border-4  border-black'>
                        <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 0 ? 'bg-green-500' : 'custom-color'}`}></div>
                        <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full ${light === 1 ? 'bg-yellow-300' : 'custom-color'}`}></div>
                        <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 2 || light === 3 || light === 4 || light === 5 || light === 6 || light === 7 ? 'bg-red-500' : 'custom-color'}`}></div>

                    </div>
                    <p className='text-lg font-bold pl-2'>Lane 1</p>
                </div>
                {/* Lane 3 */}
                <div className='flex  items-center'>
                    <div className='border-4  border-black'>
                        <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 4 ? 'bg-green-500' : 'custom-color'}`}></div>
                        <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full ${light === 5 ? 'bg-yellow-300' : 'custom-color'} `}></div>
                        <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 0 || light === 1 || light === 2 || light === 3 || light === 6 || light === 7 ? 'bg-red-500' : 'custom-color'}`}></div>

                    </div>
                    <p className='text-lg font-bold pl-2'>Lane 3</p>
                </div>
            </div>

            {/* Lane 4 */}
            <div className='flex justify-center  items-center ml-16'>
                <div className='border-4  border-black'>
                    <div className={`w-8 h-8 mx-2 rounded-full my-3 ${light === 6 ? 'bg-green-500' : 'custom-color'}`}></div>
                    <div className={`w-8 h-8 mx-2 rounded-full my-3 ${light === 7 ? 'bg-yellow-300' : 'custom-color'}`}></div>
                    <div className={`${!active && '!bg-[#F4E2B4]'} w-8 h-8 mx-2 rounded-full my-3 ${light === 0 || light === 1 || light === 2 || light === 3 || light === 4 || light === 5 ? 'bg-red-500' : 'custom-color'}`}></div>

                </div>
                <p className='text-lg font-bold pl-2'>Lane 4</p>
            </div>

            <div className='flex justify-center gap-5 mt-5'>
                <button onClick={handleStart} className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'>Start</button>
                <button onClick={handleStop} className='bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded'>Stop</button>
            </div>
        </div >
    );
};

export default TrafficLights;