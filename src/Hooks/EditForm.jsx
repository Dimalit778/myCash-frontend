import { Edit } from '@mui/icons-material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';

const EditForm = ({ item }) => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(item);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    // setNewAction({ ...newAction, userId: userInfo._id });
    setShow(true);
  };

  const [newAction, setNewAction] = useState({
    userId: userInfo._id,
    title: '',
    amount: '',
    category: '',
    description: '',
    date: '',
  });
  const { title, amount, date, category, description } = item;

  const addNewAction = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Edit />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="addForm" onSubmit={addNewAction}>
            <div className="form-group ">
              <label className="label ms-1">Title</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, title: e.target.value })
                }
                value={item.title}
                type="text"
                required={true}
                className="form-control  "
              />
            </div>
            <div className="form-group ">
              <label className="label ms-1">Amount</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, amount: e.target.value })
                }
                value={item.amount}
                type="text"
                required={true}
                className=" form-control"
              />
            </div>
            <div className="form-group ">
              <label className="label ms-1">Date</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, date: e.target.value })
                }
                value={item.date}
                type="date"
                required={true}
                className=" form-control"
              />
            </div>
            <div className="form-group ">
              <label className="label ms-1">Category</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, category: e.target.value })
                }
                value={item.category}
                type="text"
                required={true}
                className=" form-control  "
              />
            </div>
            <div className="form-group ">
              <label className="label ms-1">Description</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, description: e.target.value })
                }
                value={item.description}
                type="text"
                required={true}
                className=" form-control  "
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

export default EditForm;
