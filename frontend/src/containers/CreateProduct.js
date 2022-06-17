import React, { useState } from "react";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import DropZone from "../components/DropZone/DropZone";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inStock, setInStock] = useState(true);
  const [price, setPrice] = useState(0);
  const [selectedFile, setSelectedFile] = useState([]);
  const [base64, setBase64] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fluid-container ml-4 mt-4">
      <div className="">
        <div className="col-lg-6 col-md-6 col-sm-12"></div>
        <div id="right__loginContainer" className="col-lg-6 col-md-6 col-sm-12">
          <div>
            <h2 className="heading">Create a Product</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Product Name"
              />
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Product Description"
              />
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="Price"
                min={1}
              />

              <DropZone
                onFileSelected={setSelectedFile}
                selectedFile={selectedFile}
                base64={base64}
                setBase64={setBase64}
              />
              <Button type="submit" label="LOGIN" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
