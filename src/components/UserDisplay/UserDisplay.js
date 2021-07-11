import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import UserUpdate from "../UserUpdate/UserUpdate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function UserDisplay() {
  const classes = useStyles();

  const [card, setCard] = useState([]); 
  const [dele, setDele] = useState(""); 

  const fetchResults = async () => {
    try {
      const { data } = await axios.get("/user/get");
      console.log("data test 2", data) 
      setCard(data)

    } catch (error) {
      console.log(error);
    }
  };

  const deleteuser = async (_id) => {
    try {
        const { data } = await axios.post("/user/delete", {
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
                         {data.firstName}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.lastName}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.email}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.password}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.number}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.gender}
                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                         {data.birthday}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="secondary" onClick={() => deleteuser(data._id)}>
                       Delete
                     </Button>
                     <UserUpdate update = {data}/>
                   </CardActions>
                 </Card>
              ))}
    </div>

  );
}