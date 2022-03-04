import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import {styled} from '@mui/material/styles';
import theme from '../theme';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})({
    transform:  'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
});

const PostComments = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                </Typography>

                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and
                    peppers, and cook without stirring, until most of the liquid is absorbed,
                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                    mussels, tucking them down into the rice, and cook again without
                    stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
            </CardContent>
        </Collapse>
        </>
    );
};

export default PostComments;
