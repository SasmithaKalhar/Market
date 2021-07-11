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
import NotificationUpdate from "../NotificationUpdate/NotificationUpdate";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    rootGrid: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
        maxWidth: "100%",
      },
      media: {
        height: 140,
      },
  }));

export default function NotificationDisplay() {

  const classes = useStyles();

  const [card, setCard] = useState([]);
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/notification/get");
      console.log("dgfghd", data)
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
        const { data } = await axios.post("/notification/delete", {
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
                            {data.topic}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.discription}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="secondary" onClick={() => deletecard(data._id)}>
                            delete
                        </Button>
                        <NotificationUpdate notification = {data}/>
                        </CardActions>
                    </Card>
                  </Grid>
                  
              ))}
      
      
    </Grid>
  </div>

  );
}