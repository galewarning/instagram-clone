import React from 'react'
import {IoReorderThreeOutline} from 'react-icons/io5'
import { mainu } from './SidebarConfig'

const Sidebar = () => {
  return (
    <div>
        <div>
            <div>
                <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
            </div>
            <div className='w-10'>
                {mainu.map((item => <div className='flex items-center mb-5 cursor-pointer text-lg'>
                    <p>{item.title}</p>
                    {item.icon}
                </div>))}
                
                
            </div>
        </div>
        <div className='flex items-center cursor-pointer'>
            <IoReorderThreeOutline />
            <p className='ml-5'>More</p>
        </div>
    </div>
  )
}

export default Sidebar