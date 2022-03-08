import { makeStyles } from '@mui/styles';

import { Paper } from '@mui/material';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        background: 'gainsboro',
    },
});

export const Card = ({ children = null, }) => {
    const classes = useStyles();
    return (
        htm`
        <${Paper} className=${classes.root}>
            ${children}
        <//>`
    );
};

export default Card;