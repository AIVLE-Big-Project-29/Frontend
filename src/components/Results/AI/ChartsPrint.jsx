import { useState } from 'react';

import * as SC from './style';
import { Scatter, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement,
  Title,
  CategoryScale,
} from 'chart.js/auto';

const ChartsPrint = ({ data }) => {
  const [selectedPoints, setSelectedPoints] = useState([]);
  const receivedData = data;

  ChartJS.register(
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    CategoryScale,
    BarElement,
    Title
  );

  // scatter plot
  const chartData = {
    datasets: [
      {
        label: '예측 데이터',
        data: receivedData.location.map((loc, index) => ({
          x: receivedData.necessity[index],
          y: receivedData.compatibility[index],
          label: loc,
        })),
        backgroundColor: 'rgba(252, 34, 0, 0.5)',
        borderColor: 'rgb(252, 34, 0)',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointStyle: 'circle',
      },
      {
        label: '실제 선택 데이터',
        data: receivedData.location.map((loc, index) => ({
          x: receivedData.necessity[index],
          y: receivedData.compatibility[index],
          label: loc,
        })),
        backgroundColor: 'rgb(0, 110, 255, 0.2)',
        borderColor: 'rgb(0, 110, 255)',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointStyle: 'rect',
      },
      {
        label: '실제 미선택 데이터',
        data: receivedData.location.map((loc, index) => ({
          x: receivedData.necessity[index],
          y: receivedData.compatibility[index],
          label: loc,
        })),
        backgroundColor: 'rgb(255, 162, 0, 0.5)',
        borderColor: 'rgb(255, 162, 0)',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointStyle: 'rect',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        callbacks: {
          title: (context) => {
            return `location: ${context[0].raw.label}`;
          },
          label: (context) =>
            `necessity: ${context.parsed.x}, compatibility: ${context.parsed.y}`,
        },
      },
      title: {
        display: true,
        text: 'Scatter Plot',
      },
    },
    onClick: (event, elements, chart) => {
      if (elements.length > 0) {
        const dataIndex = elements[0].index;
        const location = elements[0].element.$context.raw.label;

        console.log(elements[0]);

        setSelectedPoints((prev) => {
          console.log('prev', prev);
          const pointExists = prev.some((point) => point.location === location);
          console.log('pointExists', pointExists);
          if (pointExists) {
            console.log(
              '포인터 필터',
              prev.filter((point) => point.location !== location)
            );
            return prev.filter((point) => point.location !== location);
          } else {
            const newPoints = [
              ...prev,
              {
                location: location,
                env: receivedData.env[dataIndex], // 환경 관련 데이터
                life: receivedData.life[dataIndex], // 생활 관련 데이터
              },
            ];
            console.log('newPoints', newPoints);
            console.log(
              'newPoints 필터',
              newPoints.length > 3 ? newPoints.slice(1) : newPoints
            );
            return newPoints.length > 3 ? newPoints.slice(1) : newPoints;
          }
        });
      }
    },
    onHover: (event, elements, chart) => {
      chart.canvas.style.cursor = elements.length > 0 ? 'pointer' : 'default';
    },
  };

  // bar plot

  const barChartData = {
    labels: selectedPoints.map((point) => point.location),
    datasets: [
      {
        label: '환경 데이터',
        data: selectedPoints.map((point) => point.env),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: '생활 데이터',
        data: selectedPoints.map((point) => point.life),
        backgroundColor: 'rgba(73, 138, 138, 0.2)',
        borderColor: 'rgba(75, 138, 138, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    // parsing: {
    //   xAxisKey: 'location',
    // },
    plugins: {
      // title: {
      //   display: true,
      //   text: 'Bar Plot',
      // },
      // tooltip: {
      //   mode: 'index',
      //   intersect: false,
      // callbacks: {
      //   title: (context) => {
      //     return `location: ${context[0].raw.label}`;
      //   },
      //   label: (context) =>
      //     `necessity: ${context.parsed.x}, compatibility: ${context.parsed.y}`,
      // },
      // },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'location',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Values',
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Scatter data={chartData} options={options} />
      {selectedPoints.length > 0 && (
        <Bar data={barChartData} options={barOptions} />
      )}
    </>
  );
};

export default ChartsPrint;
