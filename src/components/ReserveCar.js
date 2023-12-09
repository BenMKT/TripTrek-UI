import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../styles/reserveCar.css'

const ReserveCar = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="mb-2 rounded-pill" onClick={() => handleShow(v)}>
          <i className="bi bi-save2" />
              <em>Reserve</em>
              <em id="rounded-arrow"><i className="bi bi-chevron-right" /></em>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <div className='modal-controllers'>
            <Modal.Header closeButton>
            <Modal.Title>Book this [car title]</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Car description</p>
                <Form>
                    <Form.Group className="mb-3 controllers-reserve">
                        <Form.Select aria-label="Default select example" className='rounded-pill'>
                            <option>Select town</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="primary rounded-pill" type="submit">
                            Book now
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </div>
      </Modal>
    </>
  );
}


export default ReserveCar