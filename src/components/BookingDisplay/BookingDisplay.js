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
import BookingUpdate from "../BookingUpdate/BookingUpdate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function BookingDisplay() {
  const classes = useStyles();

  const [card, setCard] = useState([]);
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/booking/get");
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
        let { data } = await axios.post("/booking/delete", {
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
    <div>
        {card.map((data) => (
                   <Card className={classes.root}>
        
                   <CardActionArea>
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.location}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.dateCheckin}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.dateCheckout}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {data.discription}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {data.rooms}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {data.price}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="secondary" onClick={() => deletecard(data._id)}>
                       delete
                     </Button>
                     <BookingUpdate update = {data}/>
                   </CardActions>
                 </Card>
              ))}
    </div>

  );
}