import { useEffect, useState } from 'react';
import { Button, List, ListItem, TextField } from "@mui/material";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import { getQuestion } from '../../../services/restclient';



const options = {
    title: "...",
    chartArea: { width: "70%" },
    hAxis: {
        title: "Quorum Total",
        minValue: 0,
        viewWindow: {
            max: 1
        }
    },
};


const barColors = ["#4d4fff", "#ff4d4d", "#4dff56", "#ffb84d"];

const getChartData = (data) => {
    const { points } =  data.responses.reduce((acc, elm) => {
        acc.points.push([`${elm.name} ${(elm.value*100).toFixed(0)}%`, elm.value, barColors[acc.index]]);
        acc.index+=1;
        return acc;
    }, { points: [], index: 0 });
    return [["Element", "Respuestas", { role: "style" }], ...points]
};

const Question = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        getQuestion("asamblea-test",1)
        .then(res => {
            setData(res);
        });
    }, []);

    if(!data || Object.keys(data).length === 0) {
        return <h1>No ha seleccionadao datos</h1>;
    }
    
    return (
        <>
            <div className="block-row">
                <h1>{data.name}</h1>
                <div>
                    <Button onClick={() => {alert(">")}} variant="contained"> {"<"} </Button>
                    <Button onClick={() => {alert(">")}} variant="text"> {data.id} </Button>
                    <Button onClick={() => {alert(">")}} variant="contained"> {">"} </Button>
                </div>
            </div>
            <Chart
                chartType="BarChart"
                data={getChartData(data)}
                width="100%"
                height="400px"
            />
            <Link to="/new-question">
                <Button variant="contained"> {"Nueva Pregunta"} </Button>
            </Link>
        </>
    );
}

export default Question;