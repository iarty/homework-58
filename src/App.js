import React, { Component, Fragment } from 'react';
import classes from './App.module.css'
import Modal from './components/UI/Modal/Modal';
import Alert from './components/UI/Alert/Alert';
import Button from './components/UI/Button/Button';

export default class App extends Component {
  state = {
    showModal: false,
    showAlert: true
  };

  ModalHandler = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  Continued = () => {
    alert('Continued')
  }

  AlertHandler = () => {
    this.setState({ showAlert: false })
  }

  render() {
    const button = [
      { type: 'Primary', label: 'Continue', clicked: this.Continued },
      { type: 'Danger', label: 'Close', clicked: this.ModalHandler }
    ]
    return (
      <Fragment>
        <Modal
          show={this.state.showModal}
          close={this.ModalHandler}
          title="Some kinda modal title"
          buttonType={this.state.button}
        >
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum deserunt et unde, perferendis sunt dolorum corporis velit itaque libero! Hic necessitatibus quos soluta unde inventore? Voluptatem a sit explicabo ad, amet unde accusantium ullam?</p>
          <div className={classes.ButtonWrap}>
            <hr />
            {button.map((el, i) => <Button key={i + el.label} type={el.type} clicked={el.clicked}>{el.label}</Button>)}
          </div>
        </Modal>
        <div className={classes.Container}>
          <Alert
            // clickDismissable
            type='Warning'
            show={this.state.showAlert}
            dismiss={this.AlertHandler}
          >
            This is a warning type alert
          </Alert>

          <div className={classes.ButtonInner}>
            <Button type='Modal' clicked={this.ModalHandler}>Show Modal</Button>
          </div>
        </div>
      </Fragment>
    )
  }
}

