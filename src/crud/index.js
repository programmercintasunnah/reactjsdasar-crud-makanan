import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananselaindipilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filtermakanan) => {
          return filtermakanan;
        });
      this.setState({
        makanans: [
          ...makananselaindipilih,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const makanandipilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filtermakanan) => {
        return filtermakanan;
      });
    this.setState({
      nama: makanandipilih[0].nama,
      deskripsi: makanandipilih[0].deskripsi,
      harga: makanandipilih[0].harga,
      id: makanandipilih[0].id,
    });
    console.log(makanandipilih[0]);
  };

  hapusData = (id) => {
    const makananbaru = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filtermakanan) => {
        return filtermakanan;
      });

    this.setState({
      makanans: makananbaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <h2>CRUD REACT JS</h2>
          <Row>
            <Col lg="4">
              <Formulir
                {...this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </Col>
            <Col>
              <Tabel
                makanans={this.state.makanans}
                editData={this.editData}
                hapusData={this.hapusData}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
