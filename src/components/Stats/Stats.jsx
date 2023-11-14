// import React from 'react';
// import incomeIcon from '../../assets/BalanceIcons/incomes.png';
// import expenseIcon from '../../assets/BalanceIcons/expenses.png';
// import './stats.css';

// export const Stats = ({ type }) => {

//   let data;
//   switch (type) {
//     case 'expenses':
//       data = {
//         title: 'Expenses',
//         stats: totalExpense(),
//         icon: (
//           <img src={expenseIcon} alt="expenseIcon" width={80} height={80} />
//         ),
//       };
//       break;
//     case 'incomes':
//       data = {
//         title: 'Incomes',
//         stats: totalIncome(),
//         icon: <img src={incomeIcon} alt="expenseIcon" />,
//       };
//       break;
//     default:
//       break;
//   }
//   return (
//     <div className="statHeader  text-center ">
//       <span className="title_Main">{data.title}</span>
//       <div className="stats d-flex justify-content-around  ">
//         <div className=" d-flex  align-items-center ">
//           <span>{data.icon}</span>
//         </div>
//         <div className=" d-flex align-items-center ">
//           <h4>{data.stats}</h4>
//         </div>
//       </div>
//     </div>
//   );
// };
