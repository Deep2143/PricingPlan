import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    textAlign: 'center',
    color: 'black',
    height: '100%', // added to make all boxes same size
    border: '1px solid #ccc',
    transition: 'all 0.2s ease-in-out', // add transition for smooth effect
    '&:hover': {
      transform: 'scale(1.05)', // increase button size by 5% on hover
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    },
  },
  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
   
  },
  feature: {
    marginBottom: theme.spacing(0.5),
    textAlign: 'center', // add this to center the feature name
  },
  featureValue: {
    textAlign: 'center', // add this to center the feature value
  },
  checkmark: {
    color: '#00b0ff',
    fontSize: '2rem',
  },
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1),

  },
  greyBackground: {
    backgroundColor: '#ebebeb', // light grey color
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(2),
    fontFamily: "Open Sans",
  },
  button: {
   // borderradius: '10px',
    padding: '10px 8px',
    fontSize: '16px',
    cursor: 'pointer',
    color:"white",
    backgroundColor: '#3F51B5',
    transition: 'all 0.2s ease-in-out', // add transition for smooth effect
    '&:hover': {
      transform: 'scale(1.05)', // increase button size by 5% on hover
    },
  },
}))

const PricingTable = () => {
  const classes = useStyles();

  const plans = [
    {
      title: 'CHOOSE YOUR PLAN',
      price: '',
      features: [
        { name: 'HD Available ', value: '' },
        { name: 'Ultra HD Available', value: '' },
        { name: 'Screen users at same time', value: '' },
        { name: 'Device accessibility', value: '' },
        { name: 'Access to all movies', value: '' },
        { name: 'Cancellation access', value: '' },
        { name: 'free access for first month', value: '' },
        { name: 'Download Availavle', value: '' },
      ],
    },
    {
      title: 'FREE',
      price: '0',
      features: [
        { value: '❌' },
        { value: '❌' },
        { value: '1' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '❌' },
      ],
    },
    {
      title: 'BASIC',
      price: 199,
      features: [
        { value: '❌' },
        { value: '❌' },
        { value: '2' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '❌' },
      ],
    },
    {
      title: 'STANDARD',
      price: 399,
      features: [
        { value: '✔' },
        { value: '✔' },
        { value: '3' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '❌' },
      ],
    },
    {
      title: 'PREMIUM',
      price: 599,
      features: [
        { value: '✔' },
        { value: '✔' },
        { value: '5' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
        { value: '✔' },
      ],
    },
  ];

  return (
    <Container maxWidth="1200" className={classes.root}  >
    <Typography variant="h4" className={classes.heading} color='primary'      >
      Select the plan that's right for you
    </Typography>
    <Grid container spacing={0} justify="center">
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={2.4} lg={2} xl={2} key={index} >
          <Paper className={classes.paper}>
            {index === 0 && (
              <Typography variant="h4"  >
                {plan.title}
                
                <Typography variant="body2" gutterBottom>
                  Compare plan Feature
                  <Divider />
                </Typography>
              </Typography>
              
            )}    
           {plan.title!== 'CHOOSE YOUR PLAN' && (
              <Typography variant="h6" gutterBottom>
                {plan.title}
              </Typography>
            )}
            {plan.price && (
              <Typography variant="h5" className={classes.price} color='primary' >
                ₹{plan.price}
              
              </Typography>
            )}
            {plan.price && (
              <Typography variant="body2" gutterBottom >
                / Mo
                <Divider />
              </Typography>
            )}
            {plan.features.map((feature, featureIndex) => (
              <div 
                className={featureIndex % 2 === 0? classes.featureRow : `${classes.featureRow} ${classes.greyBackground}`}
                key={featureIndex}
              >
                {index === 0 && (
                  <Typography variant="body1" className={classes.feature}>
                    {feature.name}
                  </Typography>
                )}
                <Typography 
                  variant="body1" 
                  className={featureIndex % 2 === 0? classes.feature : `${classes.feature}`}
                >
                  {feature.value}
                </Typography>
              </div>
            ))}
            {plan.price && (
              <Typography variant="body2" gutterBottom  >
                <button className={classes.button}>Buy Now</button>
              </Typography>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);
};

export default PricingTable;