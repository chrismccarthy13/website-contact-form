import React, { Component } from 'react';
import { TextField, Grid, Typography, withStyles } from '@material-ui/core';
import MuiButton from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import MuiContainer from '@material-ui/core/Container';
import styled from "styled-components";

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: '#53A8CB',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#698E9C',
      },
    },
  },
})(TextField);

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Container = styled(MuiContainer)`
  display: inline-block;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,.15);
  padding: 20px 30px;
  min-width: 500px;
  text-align: center;
  box-sizing: border-box;
  margin-top: 100px;
`;

const Link = styled(MuiLink)`
  color: #3790B4 !important;
`;

const Button = styled(MuiButton)`
  && {
    text-transform: unset;
    background-color: #3790B4 !important;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &&:disabled {
    cursor: not-allowed;
    background-color: #3790B4 !important;
    opacity: 0.5;
  }
`;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name:'',
      message:'',
      emailValid: '',
      formIncomplete: true,
    };
  }

//Function to verify valid email and enables sumbit button
  validateEmail = (emailInput) => {
    let email = emailInput
    const emailValid = emailInput.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const formIncomplete = (emailValid ) ? false : true;

    this.setState({
      email,
      emailValid,
      formIncomplete,
    })
  }

  handleUserEmail = (event) => this.validateEmail(event.target.value);

  render() {
    const {
      email,
      name,
      message,
      formIncomplete,
    } = this.state;

    return (
      <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Chris McCarthy's Contact Form
          </Typography>

          <GridWrapper>
            <Grid container spacing={2}>
              <Grid item xs={12} className='grid-input'>
                <CssTextField
                  id="name"
                  label="Name"
                  autoComplete="name"
                  variant="outlined"
                  required={true}
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} className='grid-input'>
                <CssTextField
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  variant="outlined"
                  required={true}
                  value={email}
                  onChange={this.handleUserEmail}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className='grid-input'>
                <CssTextField
                  id="message"
                  label="Message"
                  variant="outlined"
                  required={true}
                  value={message}
                  onChange={e => this.setState({ message: e.target.value })}
                  rows="4"
                  multiline
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={formIncomplete}
              fullWidth
            >
              Submit
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Log Out
                </Link>
              </Grid>
            </Grid>
          </GridWrapper>
      </Container>
    );
  }
}
