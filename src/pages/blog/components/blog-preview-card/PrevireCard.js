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
    // import('../markdown/article.md')
    import('../../../../markdown/mastering-javascript.md').then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPost(response))
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
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Filtering with React.js & the HTML Data List Element"
        subheader="October 10, 2022"
      />
      <CardMedia component="img" alt="logo" height="140" image={filter} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          How do you filter your data with React.js? What HTML element are best
          for my application? How to do combined search?...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">
          <Link to=":id">Read Article</Link>
        </Button>
      </CardActions>
    </Card>
    // <article className="blog-card-wrapper">
    //   {/* <img src="https://avatars.githubusercontent.com/u/45571546?v=4" /> */}
    //   <div
    //     className="photo"
    //     style={{
    //       backgroundImage:
    //         'url(https://avatars.githubusercontent.com/u/45571546?v=4)',
    //     }}
    //   ></div>
    //   <h3>fdsf</h3>
    //   {/* <Link to={blog.id}>{blog.name}</Link> */}
    //   <Link to="..">Link</Link>
    // </article>
  );
}

export default PrevireCard