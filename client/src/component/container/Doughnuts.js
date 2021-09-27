import { Doughnut } from 'react-chartjs-2'
function Doughnuts(props){

    const {title}=props

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      

    return(
      <div className="contentBox">
        <div className={`${title}Doughnuts`} style={{"padding" : "2rem"}}>
                  {title}
        </div>
        <Doughnut data={data}  style={{"border" : "2rem"}} />
        </div>
      )
}


export default Doughnuts