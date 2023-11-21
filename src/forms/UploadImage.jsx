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
      // Upload the image file to CloudDinary database
      const res = await uploadImage({ userImage });
      //?  Update image to User Schema
      if (res) {
        // if upload successed -> update the user with imageUrl
        const result = await updateUser({
          _id: userInfo._id,
          imageUrl: res.data.public_id,
        }).unwrap();
        // add to userInfo in the local storage  the imageUrl
        dispatch(
          setCredentials({
            _id: result._id,
            name: result.name,
            email: result.email,
            imageUrl: result.imageUrl,
          })
        );
        toast.success('Profile updated successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div>
        <input
          className=" w-50 "
          type="file"
          placeholder=""
          accept="image/"
          onChange={handleChange}
        />
        <button
          style={{
            backgroundColor: 'grey',
            border: '2px solid black',
            padding: '5px',
          }}
          type="submit"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default UploadImage;
