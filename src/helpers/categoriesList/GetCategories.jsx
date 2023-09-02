import React, { useEffect } from 'react';

import './getCategories.css';

import AddCategory from '../../forms/addCategory';
import AddModel from '../../forms/addModel';
import { useGlobalContext } from '../../Context/globalContext';

const GetCategories = ({ userId }) => {
  const { getCategories, categoryList, deleteCategory } = useGlobalContext();
  useEffect(() => {
    // Get user categories
    getCategories(userId);
  }, []);

  return (
    <div className=" flex-column ">
      <div className="d-flex justify-content-center ">
        <AddCategory />
      </div>
      <ul className="d-flex gap-5 flex-wrap justify-content-center list-unstyled   ">
        {categoryList.map((category) => (
          <li className="cate " key={category._id}>
            <button
              className="deleteBtn"
              onClick={() => deleteCategory(category._id, userId)}
            >
              X
            </button>
            <div className="cardCate text-center  ">
              <h2>{category.cateName}</h2>
              <div className="d-flex mt-3  justify-content-between ">
                <button>See All</button>
                {/* add expenes */}
                <AddModel categoryId={category._id} />
              </div>
              <div className="totalExpense mt-4">
                <h5>Total expense: 0</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetCategories;
