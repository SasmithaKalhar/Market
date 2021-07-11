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
import DiliveryFormUpdate from "../DiliveryFormUpdate/DiliveryFormUpdate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DeliveryFormdisplay() {
  const classes = useStyles();

  const [card, setCard] = useState([]); 
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/deliveryForm/get");
      console.log("data test 1111", data) 
      setCard(data)
      
    } catch (error) {
      console.log(error);
    }
  };

  const deletecard = async (_id) => {
    try {
        const { data } = await axios.post("/deliveryForm/delete", {
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
                         {data.FullName}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.phoneNumber}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.emailAddres}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.province}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.district}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.cty}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.address}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.label}
                       </Typography>
                       
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="secondary" onClick={() => deletecard(data._id)}>
                       Delete
                     </Button>
                     <DiliveryFormUpdate update = {data}/>
                   </CardActions>
                 </Card>
              ))}
    </div>

  );
}