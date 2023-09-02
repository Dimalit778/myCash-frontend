import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';

const AddCategory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  const addCategory = async (e) => {
    try {
      const { data } = await axios.post('/api/newCategory', {
        userId: user._id,
        cateName: category,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Successfully added');
        setCategory({});
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button className=" bg-secondary d-flex gap-2 m-3" onClick={handleShow}>
        <h3> + </h3>
        <h3> Add Category</h3>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="addExpense" onSubmit={addCategory}>
            <div className="form-group ">
              <label className="label ms-1">Title</label>
              <input
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="btnSumbit d-flex justify-content-end mt-5 ">
              <Button type="submit" variant="primary">
                Add new
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCategory;
