import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import { useAddIncomeMutation } from '../Api/slicesApi/incomeApiSlice';
import { useSelector } from 'react-redux';
import { useAddExpenseMutation } from '../Api/slicesApi/expenseApiSlice';
import { expCategories } from '../hooks/categoryList.js';
import { incCategories } from 'hooks/incomeCateList.js';
import './model.css';

const AddForm = ({ actionType, date }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [addIncome] = useAddIncomeMutation();
  const [addExpense] = useAddExpenseMutation();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setNewAction(initialAction);
    setShow(false);
  };
  const handleShow = () => {
    setNewAction(initialAction);
    setShow(true);
  };
  const initialAction = {
    userId: userInfo._id,
    title: '',
    amount: '',
    category: '',
    description: '',
    date: '',
  };

  const [newAction, setNewAction] = useState(initialAction);

  //! --> NEED TO CHECK WHAT HAPPEN IF SERVER ERROR IN THE {ADD} FUNCTION
  const addNewAction = async (e) => {
    let added = '';
    e.preventDefault();
    switch (actionType) {
      // Case Income
      case 'income':
        added = await addIncome(newAction);

        if (!added.error) {
          handleClose();
          return toast.success('Successfully added');
        }
        return toast.error('Missing Data - Try again');
      // Case Expense
      case 'expense':
        added = await addExpense(newAction);
        if (!added.error) {
          handleClose();
          return toast.success('Successfully added.', {
            iconTheme: {
              primary: 'green',
              secondary: '#FFFAEE',
            },
          });
        }
        return toast.error('Missing data , Try again.', {
          iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE',
          },
        });

      default:
        return null;
    }
  };

  return (
    <>
      <Button
        style={{
          backgroundColor: 'MediumAquaMarine',
          color: 'black',
        }}
        onClick={handleShow}
      >
        Add New
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
            {/*//@ ---->TITLE  <---- */}
            <div className="form-group pb-2 ">
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
            {/*//@ ----> AMOUNT  <---- */}
            <div className="form-group pb-2 ">
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
            {/*//@ ---->  DATE  <---- */}
            <div className="form-group pb-2">
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
            {/*//@ ----> CATEGORY  <---- */}
            <div className="form-group pb-2">
              <label className="label ms-1">Category</label>
              <select
                style={{
                  paddingTop: '0.375rem',
                  paddingBottom: '0.375rem',
                  border: '1px solid #dee2e6',
                  borderRadius: '5px',
                  width: '100%',
                }}
                onChange={(e) =>
                  setNewAction({ ...newAction, category: e.target.value })
                }
              >
                {actionType === 'expense'
                  ? expCategories.map((category) => {
                      return (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      );
                    })
                  : incCategories.map((category) => {
                      return (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      );
                    })}
              </select>
            </div>
            {/*//@ ---->  DESCRIPTION <---- */}
            <div className="form-group pb-2">
              <label className="label ms-1">Description</label>
              <input
                onChange={(e) =>
                  setNewAction({ ...newAction, description: e.target.value })
                }
                type="text"
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
