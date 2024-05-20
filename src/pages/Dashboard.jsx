import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CalendarHorizontal from '../components/Calendar/CalendarHorizontal'

const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
      <Header currentPage='Trang chủ' />
      <main className='p-4'>
        <CalendarHorizontal
          weeksFromCurrentDate={1}
        />
      </main>
      <Navbar />
    </div>
  )
}

export default Dashboard