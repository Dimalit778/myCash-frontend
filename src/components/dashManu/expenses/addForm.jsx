// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { toast } from 'react-hot-toast';
// import { useGlobalContext } from '../../../Context/globalContext';

// const AddExpenseForm = () => {
//   const { addExpense } = useGlobalContext();

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [expense, setExpense] = useState({
//     title: '',
//     amount: '',
//     category: '',
//     description: '',
//     date: '',
//   });
//   const addExpenseHandler = (e) => {
//     e.preventDefault();
//     try {
//       addExpense(expense);
//       toast.success('Successfully added');

//       setExpense({});
//     } catch (e) {
//       toast.error(e.error);
//     }
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Add Expense
//       </Button>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Income</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form className="addExpense" onSubmit={addExpenseHandler}>
//             <div className="form-group ">
//               <label className="label ms-1">Title</label>
//               <input
//                 onChange={(e) =>
//                   setExpense({ ...expense, title: e.target.value })
//                 }
//                 type="text"
//                 className="form-control  "
//               />
//             </div>
//             <div className="form-group ">
//               <label className="label ms-1">Category</label>
//               <input
//                 onChange={(e) =>
//                   setExpense({ ...expense, category: e.target.value })
//                 }
//                 type="text"
//                 className="form-control  "
//               />
//             </div>
//             <div className="form-group ">
//               <label className="label ms-1">Amount</label>
//               <input
//                 onChange={(e) =>
//                   setExpense({ ...expense, amount: e.target.value })
//                 }
//                 type="text"
//                 className=" form-control"
//               />
//             </div>
//             <div className="form-group ">
//               <label className="label ms-1">Date</label>
//               <input
//                 onChange={(e) =>
//                   setExpense({ ...expense, date: e.target.value })
//                 }
//                 type="date"
//                 className=" form-control"
//               />
//             </div>
//             <div className="form-group ">
//               <label className="label ms-1">Description</label>
//               <input
//                 onChange={(e) =>
//                   setExpense({ ...expense, description: e.target.value })
//                 }
//                 type="text"
//                 className=" form-control  "
//               />
//             </div>
//             <div className="btnSumbit d-flex justify-content-end mt-5 ">
//               <Button
//                 onClick={() => {
//                   handleClose();
//                 }}
//                 type="submit"
//                 variant="primary"
//               >
//                 Add new
//               </Button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default AddExpenseForm;
