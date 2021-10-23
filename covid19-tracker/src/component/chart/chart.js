import React, { useEffect, useState } from 'react';
import { FetchDailyData } from '../../apis/apis';
import { Line, Bar } from 'react-chartjs-2';
import './chart.css';

export const Chart = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {

    let [dailyData, setDailyData] = useState([])

    useEffect(async () => {
        let dailyData = await FetchDailyData()
        setDailyData(dailyData)
    }, [])

    return (
        <div>
        {
            country ? (
                confirmed ? (
                    <Bar
                        data={{
                            labels: ["infacted", "Recovered", "Deaths"],
                            datasets: [{
                                label: "people",
                                backgroundColor: ["rgba(0,0,255,0.5)", "rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
                                data: [confirmed.value, recovered.value, deaths.value]
                            }]
                        }}
                        options={{
                            legend: { display: false },
                            title: { display: true, text: `Curret State in ${country}` }
                        }}
                    />
                ) : (
                        ""
                    )
            ) : (
                    dailyData.length  ? (
                        <Line 
                            data = {{
                                labels : dailyData.map(( { reportDate } )=> reportDate),
                                datasets : [{
                                    data : dailyData.map(({ confirmed }) => confirmed.total),
                                    label: "Infacted",
                                    borderColor: "#3333ff",
                                    backgroundColor: "#87a0e6",
                                    fill: true,
                                },{
                                    data : dailyData.map(({ deaths }) => deaths.total),
                                    label: "Deaths",
                                    borderColor: "red",
                                    backgroundColor: "rgba(255, 0, 0 , 0.5)",
                                    fill : true,
                                }]
                            }}
                        />
                    ) : (
                        ""
                    )
            )

        }
     
    </div>
    );
}