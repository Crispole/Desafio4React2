import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PasarelaPago = ({ show, handleClose, totalCompra }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pago
    console.log('Procesando pago:', formData);
    alert('¡Pago procesado con éxito!');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pasarela de Pago</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre en la tarjeta</Form.Label>
            <Form.Control type="text" name="nombre" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Número de tarjeta</Form.Label>
            <Form.Control type="text" name="numeroTarjeta" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de expiración</Form.Label>
            <Form.Control type="text" name="fechaExpiracion" placeholder="MM/AA" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" name="cvv" onChange={handleChange} required />
          </Form.Group>
          <p>Total a pagar: ${totalCompra}</p>
          <Button variant="primary" type="submit">
            Pagar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PasarelaPago;
