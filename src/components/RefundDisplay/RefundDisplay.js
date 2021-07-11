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
import Refundupdate from "../Refundupdate/Refundupdate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function RefundDisplay() {
  const classes = useStyles();

  const [card, setCard] = useState([]);
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/refund/get");
      setCard(data)
      console.log("data test", data) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResults();
    
  }, []);

  const deleterefund = async (_id) => {
    try {
        const { data } = await axios.post("/refund/delete", {
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
                         {data.reason}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.price}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {data.discription}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="secondary" onClick={() => deleterefund(data._id)}>
                       delete
                     </Button>
                     {/* <Refundupdate update = {data}/> */}
                   </CardActions>
                 </Card>
              ))}
    </div>

  );
}