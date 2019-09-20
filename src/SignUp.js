import React, { Component } from 'react';
import MuiButton from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import MuiContainer from '@material-ui/core/Container';

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
      errorMessage: '',
      email: '',
      name:'',
      message:'',
      emailValid: false,
      nameValid: false,
      messageValid: false,
    };
  }

  validateName = (nameInput) => {
    let name = nameInput;

    this.setState({
      name,
    })
  }

  validateEmail = (emailInput) => {
    let email = emailInput;

    this.setState({ email })
  }

  validateMessage = (messageInput) => {
    let message = messageInput;

    this.setState({ message })
  }

  handleUserName = (event) => this.validateName(event.target.value);
  handleUserEmail = (event) => this.validateEmail(event.target.value);
  handleUserMessage = (event) => this.validateMessage(event.target.value);

  render() {
    const {
      errorMessage,
      email,
      name,
      message,
      emailValid,
      nameValid,
      messageValid,
    } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Typography component="h1" variant="h5">
            Chris McCarthy's Contact Form
          </Typography>

          <GridWrapper>
            <Grid container spacing={2}>
              <Grid item xs={12} className='grid-input'>
                <CssTextField
                  id="name"
                  name="name"
                  label="Name"
                  autoComplete="name"
                  variant="outlined"
                  value={name}
                  required={true}
                  onChange={this.handleUserName}
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} className='grid-input'>
                <CssTextField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  variant="outlined"
                  value={email}
                  required={true}
                  onChange={this.handleUserEmail}
                  fullWidth
                >
                {email}
                </CssTextField>
              </Grid>
              <Grid item xs={12} className='grid-input'>
                <CssTextField
                  id="message-box"
                  name="message"
                  label="Message"
                  variant="outlined"
                  rows="4"
                  value={message}
                  required={true}
                  onChange={this.handleUserMessage}
                  multiline
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
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
