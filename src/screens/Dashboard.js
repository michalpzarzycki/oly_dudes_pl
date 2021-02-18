import React from 'react'
import Bar from '../components/charts/Bar'
import Doughnut from '../components/charts/Doughnut'
import Line from '../components/charts/Line'
import InfoBar from '../components/InfoBar'

function Dashboard() {
    return (
        <div>
          <InfoBar />
          <Line />
          <Bar />
          <Doughnut />
        </div>
    )
}

export default Dashboard
