import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';

const AddIncomeForm = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [income, setIncome] = useState({
    title: '',
    amount: '',
    description: '',
    date: '',
  });
  const addIncome = async (e) => {
    const { title, amount, description, date } = income;
    try {
      const { data } = await axios.post('/transactions/add-income', {
        userId: userId,
        title,
        amount,
        description,
        date,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Successfully added');

        setIncome({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Income
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="addExpense" onSubmit={addIncome}>
            <div className="form-group ">
              <label className="label ms-1">Title</label>
              <input
                onChange={(e) =>
                  setIncome({ ...income, title: e.target.value })
                }
                type="text"
                className="form-control  "
              />
            </div>

            <div className="form-group ">
              <label className="label ms-1">Amount</label>
              <input
                onChange={(e) =>
                  setIncome({ ...income, amount: e.target.value })
                }
                type="text"
                className=" form-control"
              />
            </div>
            <div className="form-group ">
              <label className="label ms-1">Date</label>
              <input
                onChange={(e) => setIncome({ ...income, date: e.target.value })}
                type="date"
                dateFormat="yyyy-MM-dd"
                className=" form-control"
              />
            </div>
            <div className="form-group ">
              <label className="label ms-1">Description</label>
              <input
                onChange={(e) =>
                  setIncome({ ...income, description: e.target.value })
                }
                type="text"
                className=" form-control  "
              />
            </div>
            <div className="btnSumbit d-flex justify-content-end mt-5 ">
              <Button
                onClick={() => {
                  handleClose();
                }}
                type="submit"
                variant="primary"
              >
                Add new income
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddIncomeForm;
