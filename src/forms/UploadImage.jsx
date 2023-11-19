import { setCredentials } from 'Api/SlicesApi/authSlice';
import { useUpdateExpenseMutation } from 'Api/SlicesApi/expenseApiSlice';
import {
  useUpdateUserMutation,
  useUploadImageMutation,
} from 'Api/SlicesApi/userApiSlice';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const UploadImage = () => {
  const [userImage, setUserImage] = useState('');
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [uploadImage] = useUploadImageMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleChange = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  const transformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
    } else {
      setUserImage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await uploadImage({ userImage });
      //?  Update image to User Schema
      if (res) {
        const result = await updateUser({
          _id: userInfo._id,
          imageUrl: res.data.public_id,
        });
        //! fix -> update the userinfo with the image url
        // dispatch(setCredentials(...result, imageUrl:res.data.public_id));
        toast.success('Profile updated successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="images">Image</label>
        <input type="file" accept="image/" onChange={handleChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadImage;
