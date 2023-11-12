import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import { useAddIncomeMutation } from '../slices/incomeApiSlice';
import { useSelector } from 'react-redux';
import { useAddExpenseMutation } from '../slices/expenseApiSlice';

const AddForm = ({ actionType }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [addIncome] = useAddIncomeMutation();
  const [addExpense] = useAddExpenseMutation();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setNewAction({});
    setShow(false);
  };
  const handleShow = () => {
    setNewAction({ ...newAction, userId: userInfo._id });
    setShow(true);
  };

  const [newAction, setNewAction] = useState({
    title: '',
    amount: '',
    category: '',
    description: '',
    date: '',
  });

  const addNewAction = async (e) => {
    e.preventDefault();
    switch (actionType) {
      case 'income':
        console.log(newAction);
        await addIncome(newAction);
        handleClose();
        return toast.success('Successfully added Income');

      case 'expense':
        await addExpense(newAction);
        handleClose();
        return toast.success('Successfully added Expense');
      default:
        return null;
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new {actionType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="addForm" onSubmit={addNewAction}>
            <div className="form-group ">
              <label className="label ms-1">Title</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, title: e.target.value })
                }
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

export default AddForm;
