import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addACar } from '../utils/fetchApi';
import { useNavigate } from 'react-router';

const AddCar = () => {
  const [photo, setPhoto] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [financeFee, setFinanceFee] = useState('');
  const [purchaseFee, setPurchaseFee] = useState('');
  const [amountPayable, setAmountPayable] = useState('');
  const [duration, setDuration] = useState('');
  const [apr, setApr] = useState('');

  const { isLoading, error} = useSelector((store) => store.cars)

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(addACar({
        car: {
          photo,
          model,
          description,
          finance_fee: financeFee,
          purchase_fee: purchaseFee,
          amount_payable: amountPayable,
          duration,
          apr,
        }
      }))
      // if (!isLoading) {
      //   navigate('/')
      // } 
    } catch (error) {
      setError(`Failed to add a new car: ${error.message}`);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="w-100" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Add New Car</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="photo">
            <Form.Label>Photo URL</Form.Label>
              <Form.Control type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
            </Form.Group>
            {/* Add more form groups for other attributes */}
            <Row>
              <Col>
                <Form.Group controlId="financeFee">
                  <Form.Label>Finance Fee</Form.Label>
                  <Form.Control type="number" value={financeFee} onChange={(e) => setFinanceFee(e.target.value)} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="purchaseFee">
                  <Form.Label>Purchase Fee</Form.Label>
                  <Form.Control type="number" value={purchaseFee} onChange={(e) => setPurchaseFee(e.target.value)} required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="amountPayable">
              <Form.Label>Amount Payable</Form.Label>
              <Form.Control type="number" value={amountPayable} onChange={(e) => setAmountPayable(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="apr">
              <Form.Label>APR</Form.Label>
              <Form.Control type="text" value={apr} onChange={(e) => setApr(e.target.value)} required />
            </Form.Group>
            <Button disabled={isLoading} className="w-100 mt-3" type="submit">
              Add Car
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddCar;
