import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import './styles/EligibilityModal.css'

interface myProps {
  show: boolean
  info:{}
}


class ClinicModal extends React.Component<myProps, {show:boolean,info:any}>{
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      info:{}
    }
  }

  close = () => {
    this.setState({
      show: false
    })}

  componentDidMount = () => {
   this.setState({
     show: this.props.show,
     info:this.props.info
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
        {console.log(this.state.info.name)}
      <Modal.Header>
        <Modal.Title className="modal-title">
         {this.state.info.name} </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body">
        Based on your age group, you are currently ineligible for the COVID19 vaccine. You will be unable to book
         appointments through this site. Please contact your GP or the vaccination hotline if you fall into a higher
          priority category. 
      </Modal.Body>
        <Button id="modal-button" variant="primary">Notify me when I become eligible!</Button>
        <Button id="modal-button" variant="light">    
            Continue to clinic finder
        </Button>   
        <Button id="modal-button" variant="light" onClick={this.close}>    
            Close
        </Button>   
    </Modal>
  </>
  );}}
  
export default ClinicModal;
