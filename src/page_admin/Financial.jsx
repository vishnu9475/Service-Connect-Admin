import React from 'react'
import AdminSideMenu from '../componants/neja/AdminSideMenu113'
import SubscriptionService from '../componants/midhun/SubscriptionService'
import Expense from '../componants/midhun/Expense'
import Chart from '../componants/midhun/Chart'
import StatCard115 from '../componants/midhun/StatCard115'
import Header from "../componants/neja/AdminMain114"
import { GiReceiveMoney } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";
import Graph from '../assets/Graph.png'

const Page127 = () => {
  return (
    <div className='flex overflow-x-hidden'>
      <AdminSideMenu/>

      <div className='flex-1 ml-0 lg:ml-[260px] w-full max-w-full'>
        <Header title="Financial Management">

        <div className='mb-4 ml-3 flex flex-col gap-4 sm:flex-row flex-wrap'>

          <StatCard115
            Icon={ImUserTie}
            title='Revenue'
             value='932'
            text={
              <>
                <span className="text-green-500">+10%</span> than last month
              </>
            }
          />

          <StatCard115
            Icon={ImUserTie}
            title='Expense'
            iconBg='bg-orange-400'
             value='754'
            text={
              <>
                <span className='text-red-500'>0.5%</span> Than Last Week
              </>
            }
          />

          {/* ✅ GRAPH INSIDE THIS CARD */}
          <StatCard115
            Icon={GiReceiveMoney}
            iconBg='bg-yellow-400'
            title='Earnings'
            value='$123,456'
            image={Graph}
            text={
              <>
                <span className='text-green-500'>+23%</span> than last month
              </>
            }
          />

        </div>

        <Chart/>

        <div className='flex flex-col lg:flex-row gap-4'>
          <SubscriptionService/>
          <Expense/>
        </div>
         </Header>
      </div>
    </div>
  )
}

export default Page127
