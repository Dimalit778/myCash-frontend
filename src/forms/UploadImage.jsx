import { setCredentials } from 'Api/SlicesApi/authSlice';
import { Image, Transformation } from 'cloudinary-react';
import {
  useUpdateUserMutation,
  useUploadImageMutation,
} from 'Api/SlicesApi/userApiSlice';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import uploadUserImg from './../assets/uploadUserImg.png';

const UploadImage = () => {
  const [userImage, setUserImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [uploadImage] = useUploadImageMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(e.target.files[0]));
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
    console.log(userImage);
    if (!userImage) return toast.error('Please add an image');
    try {
      // Upload the image file to CloudDinary database
      const res = await uploadImage({ userImage });
      console.log(res);

      //?  Update image to User Schema
      if (res) {
        // if upload successed -> update the user with imageUrl
        const result = await updateUser({
          _id: userInfo._id,
          imageUrl: res.data.public_id,
        }).unwrap();
        // add to userInfo in the local storage  the imageUrl
        console.log(result);
        dispatch(
          setCredentials({
            _id: result._id,
            name: result.name,
            email: result.email,
            imageUrl: result.imageUrl,
            isVerified: result.isVerified,
          })
        );
        toast.success('Profile updated successfully');
      }
    } catch (err) {
      toast.error('Error');
      console.log('err');
    }
  };
  return (
    <form className="text-center " onSubmit={handleSubmit}>
      <div className="imgDiv mb-4  ">
        {/* if user have image  */}
        {userInfo.imageUrl && (
          <Image
            cloudName="dx6oxmki4"
            publicId={userInfo.imageUrl}
            className="cloudImage"
          >
            <Transformation
              width="200"
              height="200"
              gravity="auto"
              crop="fill"
              quality="auto"
            />
          </Image>
        )}
        {/* if user choose image show the image */}
        {imagePreview && (
          <img
            style={{ height: '20vh', widows: '20vw' }}
            src={imagePreview}
            alt="imagePreview"
          ></img>
        )}
        {/* if not user image and user not choose to upload image show Avatar Image */}
        {!userInfo.imageUrl && !imagePreview && (
          <div className="">
            <img
              style={{ height: '150px' }}
              src={uploadUserImg}
              alt="uploadUserImg"
            />
          </div>
        )}
      </div>

      {/* upload button */}
      <div className="">
        <label>
          <input
            style={{ display: 'none' }}
            className=" mx-auto ps-5"
            type="file"
            accept="image/"
            onChange={handleChange}
          />
          <span className="searchImage">Add Image</span>
        </label>
        <button
          style={{
            backgroundColor: 'grey',
            border: '2px solid black',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            width: '75px',
          }}
          className="mx-auto"
          type="submit"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default UploadImage;
