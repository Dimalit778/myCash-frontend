import { useUploadImageMutation } from 'Api/SlicesApi/userApiSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UploadImage = () => {
  const [userImage, setUserImage] = useState('');
  const { userInfo } = useSelector((state) => state.auth);

  const [uploadImage] = useUploadImageMutation();

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
    const id = userInfo._id;

    try {
      const res = await uploadImage({ id, ...userImage });
      if (res) return 'success';
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
      <div>
        {userImage ? (
          <>
            <img src={userImage} alt="userImage" />
          </>
        ) : (
          <p>imgggg</p>
        )}
      </div>
    </form>
  );
};

export default UploadImage;
