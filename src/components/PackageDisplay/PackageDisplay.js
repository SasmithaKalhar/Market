import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import PackageUpadate from "../PackageUpdate/PackageUpadate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PackageDisplay() {
  const classes = useStyles();

  const [card, setCard] = useState([]); 
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/package/get");
      setCard(data)
      console.log("data test 1", data) 
    } catch (error) {
      console.log(error);
    }
  };

  const deletecard = async (_id) => {
    try {
        const { data } = await axios.post("/package/delete", {
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
                         {data.packageName}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.duration}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.amount}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.discount}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="secondary" onClick={() => deletecard(data._id)}>
                       Delete
                     </Button>
                     <PackageUpadate update = {data}/>
                   </CardActions>
                 </Card>
              ))}
    </div>

  );
}