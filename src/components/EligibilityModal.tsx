import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import './styles/EligibilityModal.css'

interface myProps {
  show: boolean
}


class EligibilityModal extends React.Component<myProps, {show:boolean}>{
  constructor(props: any) {
    super(props);
    this.state = {
      show: false
    }
  }

  close = () => {
    this.setState({
      show: false
    })}

  componentDidMount = () => {
   this.setState({
     show: this.props.show
   })}

  render(){
  return (
  <>
    <Modal  aria-labelledby="contained-modal-title-vcenter" centered
        size="lg"
        show={this.state.show}
        onHide={this.close}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header>
        <Modal.Title className="modal-title">
          Eligibility</Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body">
        Based on your age group, you are currently ineligible for the COVID19 vaccine. You will be unable to book
         appointments through this site. Please contact your GP or the vaccination hotline if you fall into a higher
          priority category. 
      </Modal.Body>
        <Button id="modal-button" variant="primary">Notify me when I become eligible!</Button>
        <Button id="modal-button" variant="light" onClick={this.close}>    
            Continue to clinic finder
        </Button>   
    </Modal>
  </>
  );}}
  
export default EligibilityModal;
