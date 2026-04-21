import React from "react";
import "./EditProduct.css";
import Header from "../components/header";
import Footer from "../components/Footer";

const EditProduct = () => {
  return (
    <>
      <Header />

      <div className="edit-product-page">

        <div className="edit-product-container">

          <p className="back-link">← Back to Product</p>

          <div className="edit-product-card">
            <h2 className="form-title">Edit Product</h2>

            <form className="product-form">

              <div className="form-group">
                <label>Title *</label>
                <input type="text" placeholder="Bluetooth Speaker" />
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea placeholder="Enter product description"></textarea>
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select>
                  <option>Electronics</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price ($) *</label>
                  <input type="number" placeholder="89.99" />
                </div>

                <div className="form-group">
                  <label>Rating (0-5) *</label>
                  <input type="number" placeholder="4.6" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Stock *</label>
                  <input type="number" placeholder="76" />
                </div>

                <div className="form-group">
                  <label>Weight (kg) *</label>
                  <input type="number" placeholder="0.5" />
                </div>
              </div>

              <div className="form-actions">
                <button className="btn-primary">Update Product</button>
                <button className="btn-secondary">Cancel</button>
              </div>

            </form>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default EditProduct;
