import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'
import { getOverview } from '~/services/auth'
import { useEffect } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { useState } from 'react'

Chart.register(...registerables)

const cx = classNames.bind(styles)

const INIT_CHART_DATA = {
  labels: [],
  datasets: [],
}

function Dashboard() {
  const [chartPieData, setChartPieData] = useState(INIT_CHART_DATA)
  const [chartBarData, setChartBarData] = useState(INIT_CHART_DATA)

  const fetchApi = async () => {
    const res = await getOverview()
    if (res && res.EC === 0) {
      setChartPieData({
        labels: ['Users', 'Admins'],
        datasets: [
          {
            label: 'Account',
            data: [res.DT?.users?.countAdmin, res.DT?.users?.countUsers],
            backgroundColor: ['#3e95cd', '#8e5ea2'],
          },
        ],
      })
      setChartBarData({
        labels: ['Quiz', 'Questions', 'Answer'],
        datasets: [
          {
            label: 'Numbers',
            data: [
              res.DT?.others?.countQuiz,
              res.DT?.others?.countQuestions,
              res.DT?.others?.countAnswers,
            ],
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
          },
        ],
      })
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className={cx('dashboard')}>
      <div className={cx('component-pie')}>
        <h3>Analytics Users</h3>
        <div style={{ height: '43vh' }}>
          <Pie options={{ maintainAspectRatio: false }} data={chartPieData} />
        </div>
      </div>
      <div className={cx('component-bar')}>
        <h3>Bar Chart Total Quiz & Q/A</h3>
        <Bar data={chartBarData} />
      </div>
    </div>
  )
}

export default Dashboard
