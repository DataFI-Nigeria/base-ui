import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import {
//     FormGroup,
//     } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import MatButton from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';




const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
      },
      paper: {
        width: 200,
        height: 230,
        overflow: 'auto',
      },
      button: {
        margin: theme.spacing(0.5, 0),
      },
    root2: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      margin:theme.spacing(7),
      bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 12,
            
        },
        pos: {
          fontSize: 11,
        },
      cardContent:{
          padding: 2,
      },
      cardroot:{
          margin:theme.spacing(1),
          height: 250 + 'px !important' ,
      }
      
      },
      
      }));
   
  
function not(a, b) {
    return a.filter(value => b.indexOf(value) === -1);
  }
  
  function intersection(a, b) {
    return a.filter(value => b.indexOf(value) !== -1);
  }

export default function ConsultationPage(props) {
    const classes = useStyles();

    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

    

return (
<form className={classes.form} >
    {/* The input search field  */}
    
<Grid container spacing={2}>
       
       
    
        <Grid item xs='12'>
            <Card className={classes.cardroot} >
                    <CardContent>
                        <Typography className={classes.title} color="primary" gutterBottom>
                            Test Order
                        </Typography>
                        <br/>
                        <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                            <FormGroup>
                                    <Label for="qualification">Please Select Test Order</Label>
                                    <Input type="select" name="educationId" >
                                        <option value="1">PHD</option>
                                        <option value="2">MSC</option>
                                        <option value="3">BSC</option>
                                        <option value="4">HND</option>
                                        <option value="5">NCE</option>
                                    </Input>
                                </FormGroup> 

                        </Grid>
                        <br/>
                        <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                            <Grid item>{customList(left)}</Grid>
                            <Grid item>
                                <Grid container direction="column" alignItems="center">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleAllRight}
                                    disabled={left.length === 0}
                                    aria-label="move all right"
                                >
                                    ≫
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleCheckedRight}
                                    disabled={leftChecked.length === 0}
                                    aria-label="move selected right"
                                >
                                    &gt;
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleCheckedLeft}
                                    disabled={rightChecked.length === 0}
                                    aria-label="move selected left"
                                >
                                    &lt;
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleAllLeft}
                                    disabled={right.length === 0}
                                    aria-label="move all left"
                                >
                                    ≪
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid item>{customList(right)}</Grid>
                            </Grid> 
                            <br/>
                            <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                                <MatButton  
                                        type="submit" 
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<SaveIcon />}
                                        >
                                        Save
                                </MatButton> 
                            </Grid>                      
                    </CardContent>                      
                </Card>
        </Grid>

    <br/>
        
    </Grid>
</form>    
)
}
