
import { Bar } from "react-chartjs-2"

const data1 = [300, 310, 320, 330]
const data2 = [300, 310, 320, 330]


function Bars(props){

    const {title} = props
    const options = {
        responsive: false,
        maintainAspectRatio: false, 
        animation: {
          duration: 3000,
          easing: "easeInBounce",
        },
        title: {
          display: true,
          text: "Bar + Line Chart",
          fontSize: 25,
         },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Months",
               },
               stacked: "true",
            },
           ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Values",
               },
              stacked: "true",
            },
           ],
        },
      };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Data1",
            data: data1,
            backgroundColor: "rgba(87, 121, 234, 0.6)",
            borderColor: "rgba(87, 121, 234, 0.6)",
            order: 1,
          },
          {
            label: "Data2",
            data: data2,
            backgroundColor: "rgba(18, 200, 150, 0.6)",
            borderColor: "rgba(18, 200, 150, 0.6)",
            order: 1,
          },
         ],
      };



    return(
      <div className="contentBox">
        <div className={`${title}Bar`} style={{"padding" : "2rem"}}>
                  {title}
        </div>
          <Bar 
          data={data} 
          options={options}
          style={{"border" : "2rem"}}
          />
      </div>
    )
}

export default Bars