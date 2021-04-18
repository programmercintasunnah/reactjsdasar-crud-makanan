import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulir = ({ harga, deskripsi, nama, handleSubmit, handleChange, id }) => {
    return (
        <div className="mt-3 mb-3">
            <Row>
                <Col>
                    <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control type="text" value={nama} name="nama" onChange={(event) => handleChange(event)} placeholder="Masukkan nama makanan" />
                        </Form.Group>
                        <Form.Group controlId="desktipsi">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control as="textarea" value={deskripsi} onChange={(event) => handleChange(event)} rows={3} name="deskripsi" placeholder="Masukkan deksripsi" />
                        </Form.Group>
                        <Form.Group controlId="harga">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="number" value={harga} name="harga" onChange={(event) => handleChange(event)} placeholder="Masukkan harga" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Simpan
                         </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default Formulir