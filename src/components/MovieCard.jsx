import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IMG_URL } from '../hooks/getEnv';
import TurnedInIcon from '@mui/icons-material/TurnedIn';





export default function MovieCard({item}) {
  const [showImg ,setShowImg] = useState(false)

  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardMedia
      onMouseEnter={() => setShowImg(true)}
      onMouseLeave={() => setShowImg(false)}
      component="img"
      className="!h-[300px]"
      height="194"
      image={`${IMG_URL}/${showImg ? item.backdrop_path : item.poster_path}`}
    />
    
      <CardContent>
      <Typography gutterBottom variant="h5" className='line-clamp-1' component="div">
          {item.title}
        </Typography>
        <Typography className='line-clamp-2' variant="body2" sx={{ color: 'text.secondary' }}>
          {item.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="save">
          <TurnedInIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}