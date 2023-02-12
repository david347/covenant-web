import { Button, List, ListItem, TextField } from "@mui/material";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from 'react-redux';
import { setPollData } from '../../../actions';
import { useEffect, useState } from 'react';
import { getQuorum } from "../../../services/restclient";

const mockPoll = {
    name: "Asamblea Test",
};

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
  
const QuorumView = () => {
    
    const dispatch = useDispatch()
    const pollData = useSelector(state => state.pollData);
    const [quorumData, setQuorumData] = useState([]);

    const fetchQuorum = async () => {
        const { data } = await getQuorum('asamblea-test');
        setQuorumData(data);
    }

    const quorum = () => {
        return quorumData?.reduce((acc, elm) => {
            acc += elm.coeff;
            return acc;
        }, 0);
    };

    useEffect(() => {
       dispatch(setPollData(mockPoll));
    }, []);

    useEffect(() => {
        fetchQuorum();
     }, []);

     if(!quorumData || Object.keys(quorumData).length === 0) {
        return (
            <>
                <p>No hay Datos</p>
            </>
        );
    }

    return ( 
        <>
            <h1> {pollData?.name}</h1>
            <h1> Quorum: {(quorum()*100).toFixed(1)} %</h1>
            <TextField label="Code" variant="standard" />
            <Chart
                chartType="BarChart"
                data={[["_", "%"], ['Quorum', quorum()]]}
                width="100%"
                height="400px"
                legendToggle
                options={options}
            />
            <div className="actions_buttons">
                <Button onClick={() => {
       dispatch(setPollData({name:"test"}));}} variant="contained"> Finalizar </Button>
            </div>
            <List className="quorum-list">
                {quorumData.map(elm => <ListItem>
                    {elm.name}
                </ListItem>)}
            </List>
        </>
    );
}


export default QuorumView;