/* eslint-disable no-unused-vars */

import React,{useState} from 'react'

import {
    HiHome, HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";


import logo from "./../assets/images/logo.png"
import HeaderItems from './HeaderItems';
function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SERACH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: FaPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        }
        ,
        {
            name: 'SERIES',
            icon: HiTv
        },


    ]

    return (
        <div className='flex justify-between items-center gap-8 p-5 w-full'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
                <div className='hidden md:flex gap-8'>

                    {menu.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <HeaderItems name={item.name} Icon={item.icon} />
                    ))}

                </div>
                <div className='flex md:hidden gap-5'>

                    {menu.map((item, index) => index < 3 && (
                        // eslint-disable-next-line react/jsx-key
                        <HeaderItems name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden ' onClick={()=>setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical} />
                     {toggle?   <div className='absolute mt-3 bg-[#121212] border-[1px] p-3  rounded-2xl border-gray-700 px-5 pt-6 '>
                        {menu.map((item, index) => index > 2 && (
                        // eslint-disable-next-line react/jsx-key
                        <HeaderItems name={item.name} Icon={item.icon} />
                    ))}
                        </div>:null}
                    </div>
                </div>

            </div>

            <img src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?w=740&t=st=1708259640~exp=1708260240~hmac=bb5144cb4eb0b9560fa56d7ee8a78579ee5b4f5e50c7b8c1ea823c0e5e1e9b34" alt=""
                className='w-[40px] rounded-full '
            />



        </div>

    )
}

export default Header;