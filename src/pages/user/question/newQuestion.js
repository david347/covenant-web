import React from 'react';
import { useState } from 'react';
import { Button, Card, CardContent, Container, Divider, List, ListItem } from '@mui/material';
import TextField from '@mui/material/TextField'

const NewQuestion = () => {
    const [question, setQuestion] = useState('');
    const [responses, setResponse] = useState([""]);


    const removeResponse = (index) => {
        responses.splice(index,1);
        setResponse([...responses]);
    };

    const createNewQuestion = () =>{
        const data = {
            name: question,
            responses
        }
    }

    return (
        <Container>
            <h1>Nueva Pregunta </h1>
            <Card sx='margin-bottom: 10px;'>
                <CardContent>
                <h2>{question}</h2>
                <TextField id="outlined-basic" label="Pregunta" variant="outlined"
                    value={question}
                    onChange={(val) => setQuestion(val.target.value)}
                />
                </CardContent>
            </Card>
            <Card sx='margin-bottom: 10px;'>
                <p>Respuestas</p>
            <Divider variant="middle"></Divider>

                <List className='block-column'>
                    {responses.map((elm, index) => (
                        <ListItem className='basic-item' key={index} >
                            <TextField id="outlined-basic" 
                                label={`Respuesta ${index+1}`} variant="outlined"
                                value={elm}
                                onChange={(val) => {
                                    responses[index] = val.target.value;
                                    setResponse([...responses]);
                                }}
                                error={!elm}
                                helperText={!elm && "este campo es requerido"}
                            />
                            <Button sx='margin-bottom: 10px;' onClick={() => {removeResponse(index)}} variant="contained"> {"-"} </Button>            
                        </ListItem>
                    ))}
                </List>
                <Button sx='margin-bottom: 10px;' className='basic-item-2' onClick={() => {setResponse([...responses, ""])}} variant="contained"> {"+"} </Button>
            </Card>
            <Button className='basic-item-2' onClick={() => createNewQuestion()} variant="contained"> Crear </Button>
        </Container>
    );
};

export default NewQuestion;