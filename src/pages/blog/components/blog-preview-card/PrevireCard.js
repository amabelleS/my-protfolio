import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

import logo from '../../../../assets/logo8.png';
// import filter from '../../assets/filtering.jpeg';
import filter from '../../assets/filter4.jpg';


import './PrevireCard.css';

const PrevireCard = () => {
  const [post, setPost] = useState('');
  const {title} = post;
  
  // console.log("🚀 ~ file: PrevireCard.js ~ line 23 ~ PrevireCard ~ content", post)
  
  useEffect(() => {
    import('../../../../markdown/article.md').then((res) => {
      fetch(res.default)
      .then((response) => response.text())
      .then((response) => {
        console.log("🚀 ~ file: PrevireCard.js ~ line 35 ~ import ~ response", response)
        return setPost(response)
      })
      .catch((err) => console.log(err));
    });
  }, []);
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label="recipe" src={logo}>
            R
          </Avatar>
        }
        title="How to create an autocomplete feature and a Search Term & cross-filter it all with React.js"
        subheader="October 10, 2022"
      />
      <CardMedia component="img" alt="logo" height="140" image={filter} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          How do you filter your data array with React.js? What kind of HTML
          elements are best for your goal? How can I filter different data
          fields with cross-filtering...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">
          <Link to=":1">Read Article</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PrevireCard