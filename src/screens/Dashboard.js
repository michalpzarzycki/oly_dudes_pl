import React from 'react'
import Bar from '../components/charts/Bar'
import Doughnut from '../components/charts/Doughnut'
import Line from '../components/charts/Line'

function Dashboard() {
    return (
        <div>
          <Line />
          <Bar />
          <Doughnut />
        </div>
    )
}

export default Dashboard
