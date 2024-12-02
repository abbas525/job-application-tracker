import { Card, CardBody, CardSubtitle, CardTitle, FormGroup, Input, Label } from "reactstrap";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

const MonthlyStats = ({ allData }) => {


  const [monthlyJobsByYear, setMonthlyJobsByYear] = useState({});
  const [yearCount, setYearCount] = useState([]);
  const [inputYear, setInputYear] = useState(yearCount[0] ||'')
 
  useEffect(() => {
    const jobs = [...allData];
    const jobCountsByYear = {};
    let singleYear = []

    jobs.forEach((job) => {
      if (job.dateApplied) {
        const date = new Date(job.dateApplied);
        const month = date.getMonth();
        const year = date.getFullYear();
        singleYear.push(year);
        setYearCount([...new Set(singleYear)])
        if (!jobCountsByYear[year]) {
          jobCountsByYear[year] = Array(12).fill(0);
        }

        jobCountsByYear[year][month] += 1;
      }
    })

    setMonthlyJobsByYear(jobCountsByYear);
  }, [allData])

   
  
  //Year Selection
  const handleYearChange = (e) => {
    setInputYear(e.target.value); 

  }

  const chartoptions = {
    series: [
      {
        name: "Applied Jobs",
        data: monthlyJobsByYear[inputYear || yearCount[0]],
      },
    ],
    options: {
      chart: {
        id: "basic-bar"
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Jobs Stats</CardTitle>
        <CardSubtitle className="text-muted d-flex justify-content-between  align-items-center" tag="h6">
          Yearly Applications Report 
            <Input
              id="years"
              name="select"
              type="select"
              className="ms-3 w-25" 
              value={inputYear}
              onChange={handleYearChange}
            >
              {yearCount.map((year) => (
                <option value={year} key={year}>
                  {year}
              </option>
              ))} 
            </Input> 
        </CardSubtitle>
        <Chart
          type="bar"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default MonthlyStats;
