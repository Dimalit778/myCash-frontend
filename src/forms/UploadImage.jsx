import axios from 'axios';
import React, { useState } from 'react';

const UploadImage = () => {
  const [img, setImg] = useState(null);
  let cloudName = process.env.REACT_APP_CLOUD_NAME;
  console.log(cloudName);

  const uploadFile = async () => {
    const data = new FormData();
    data.append('file', 'image');
    data.append('upload_preset', 'myCash_images');
    try {
      let cloudName = process.env.REACT_APP_CLOUD_NAME;
      let resourceType = 'myCash_images';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgUrl = await uploadFile();
      setImg(null);
      console.log('file uploaded successfully');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="images">Image</label>
        <input
          type="file"
          name=""
          id="img"
          onChange={(e) => setImg((prev) => e.target.files[0])}
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadImage;
