import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CancelIcon from "@material-ui/icons/Cancel";
import "./AddProduct.css";
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export default function AddProduct({ filteredProducts, setFilteredProducts }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [productCategory, setProductCategory] = useState("Laptop");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isTopProduct, setIsTopProduct] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="modal-container">
        <CancelIcon
          className="cancel-icon"
          style={{ fontSize: 40 }}
          onClick={() => {
            setOpen(false);
          }}
        />
        <p id="simple-modal-title" className="modal-title">
          Add Product
        </p>
        <div>
          <p id="simple-modal-description">Product Category</p>
        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select
            </InputLabel>
            <Select
              className="modal-text"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <MenuItem value={"Laptop"}>Laptop</MenuItem>
              <MenuItem value={"Band"}>Band</MenuItem>
              <MenuItem value={"Smart Phone"}>Smart Phone</MenuItem>
              <MenuItem value={"Tablet"}>Tablet</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <p>Product Title</p>
        </div>
        <div>
          <TextField
            className="modal-text"
            id="outlined-basic"
            label="Enter product title"
            variant="outlined"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <TextField
            className="modal-text"
            id="outlined-basic"
            label="Enter price"
            variant="outlined"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="check-products">
          <div className="check-box">
            <Checkbox
              inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              value={isTopProduct}
              onChange={() => setIsTopProduct(!isTopProduct)}
            />
          </div>
          <p>Top Products</p>
        </div>
        <div>
          <p>Upload Product Image</p>
        </div>
        <div></div>
        <div className="button-container">
          <input
            hidden
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) =>
              setProductImageUrl(URL.createObjectURL(e.target.files[0]))
            }
          />
          <label htmlFor="contained-button-file">
            <Button
              className="upload-button"
              type="button"
              variant="outlined"
              color="secondary"
              component="span"
            >
              Upload
            </Button>
          </label>
        </div>
        <div className="btns">
          <div className="cancelBtn">
            <Button
              variant="contained"
              size="medium"
              className={classes.margin}
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="saveBtn">
            <Button
              variant="contained"
              size="medium"
              className={classes.margin}
              onClick={() => {
                addNewProduct();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  function addNewProduct() {
    console.log(
      productCategory,
      productName,
      productPrice,
      isTopProduct,
      productImageUrl
    );
    const newProduct = {
      productTitle: productName,
      productPrice: productPrice,
      productCategory: productCategory,
      isTopProduct: isTopProduct,
      productImageUrl: productImageUrl,
    };
    setFilteredProducts([...filteredProducts, newProduct]);
    setOpen(false);
    console.log(newProduct);
    console.log("filteredProducts", filteredProducts);
  }
  return (
    <div className="product">
      <Button type="button" onClick={handleOpen} color="secondary">
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
