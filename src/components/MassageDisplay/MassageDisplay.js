import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import MassageUpdate from "../MassageUpdate/MassageUpdate";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
  root1: {
    flexGrow: 1,
  },
});

export default function MassageDisplay() {
  const classes = useStyles();

  const [card, setCard] = useState([]);
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/massege/get");
      setCard(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResults();
    
  }, []);

  const deletecard = async (_id) => {
    try {
        const { data } = await axios.post("/massege/delete", {
            _id : _id,
        });
        setDele(data)
      } catch (error) {
        console.log(error);
      }  
  }

  useEffect(() => {
    fetchResults();
    
  }, [dele]);

  return (
      <div className={classes.root}>
      <Grid container spacing={3}>
      {card.map((data) => (
        <Grid item xs={6}>
        <Card className={classes.root}>
        
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" onClick={() => deletecard(data._id)}>
            delete
          </Button>
          <MassageUpdate update = {data}/>
        </CardActions>
      </Card>
        </Grid>
        ))}
      </Grid>
    </div>

  );
}