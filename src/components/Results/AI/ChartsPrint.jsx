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
  const tmp = receivedData.existing_results_actual_1.map((loc, index) => ({
    x: loc.necessity,
    y: loc.compatibility,
    // label: loc,
  }));
  console.log(tmp);

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
        // data: {
        //   x: receivedData.model_results.necessity[0],
        //   y: receivedData.model_results.compatibility[0],
        //   label: receivedData.model_results.location,
        // },
        data: receivedData.model_results.map((loc, index) => ({
          x: loc.necessity,
          y: loc.compatibility,
          label: loc.location,
        })),
        backgroundColor: 'rgba(252, 34, 0, 0.5)',
        borderColor: 'rgb(252, 34, 0)',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointStyle: 'circle',
      },
      {
        label: '실제 선택 데이터',
        // data: [
        //   {
        //     x: receivedData.existing_results_actual_1.necessity,
        //     y: receivedData.existing_results_actual_1.compatibility,
        //     label: receivedData.existing_results_actual_1.location,
        //   },
        // ],
        data: receivedData.existing_results_actual_1.map((loc, index) => ({
          x: loc.necessity,
          y: loc.compatibility,
          label: loc.location,
        })),
        backgroundColor: 'rgb(0, 110, 255, 0.2)',
        borderColor: 'rgb(0, 110, 255)',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointStyle: 'rect',
      },
      {
        label: '실제 미선택 데이터',
        // data: {
        //   x: receivedData.existing_results_actual_0.necessity,
        //   y: receivedData.existing_results_actual_0.compatibility,
        //   label: receivedData.existing_results_actual_0.location,
        // },
        data: receivedData.existing_results_actual_0.map((loc, index) => ({
          x: loc.necessity,
          y: loc.compatibility,
          label: loc.location,
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
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: '필요성',
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: '적합성',
        },
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
                env: receivedData.model_results[dataIndex].env, // 환경 관련 데이터
                life: receivedData.model_results[dataIndex].life, // 생활 관련 데이터
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
        label: '환경숲',
        data: selectedPoints.map((point) => point.env),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barPercentage: 0.77,
        categoryPercentage: 0.5,
      },
      {
        label: '생활숲',
        data: selectedPoints.map((point) => point.life),
        backgroundColor: 'rgba(73, 138, 138, 0.2)',
        borderColor: 'rgba(75, 138, 138, 1)',
        borderWidth: 1,
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {},
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
    <SC.ChartContainer>
      <Scatter
        data={chartData}
        options={options}
        style={{
          boxSizing: 'border-box',
          display: 'block',
          height: '40vh',
          width: '75vw',
          cursor: 'pointer',
        }}
      />
      {selectedPoints.length > 0 && (
        <Bar
          data={barChartData}
          options={barOptions}
          style={{
            boxSizing: 'border-box',
            display: 'block',
            height: '40vh',
            width: '75vw',
            cursor: 'pointer',
          }}
        />
      )}
    </SC.ChartContainer>
  );
};

export default ChartsPrint;
