import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
const AddChocolate = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;

    const quality = form.quality.value;

    console.log(name, country, quality);
    const chocolate = {name,country,quality}
    fetch('http://localhost:5000/Chocolate',{
        method: "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(chocolate) 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            form.reset()
            Swal.fire({
                title: 'Success!',
                text: 'Your Chocolate Added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  };
  return (
    <div className="mx-[200px]">
      <div className="flex justify-center mt-[100px]">
        <h1 className="px-6 text-2xl font-bold text-center py-6 rounded w-[500px] text-white bg-[#91572B]">
          Chocolate Management System
        </h1>
      </div>
      <div className="mt-[100px]">
        <Link to="/">
          <h1 className="flex items-center gap-2 border w-[200px] p-4 font-semibold">
            {" "}
            <span>
              <FaArrowLeft></FaArrowLeft>
            </span>{" "}
            All Chocolate
          </h1>
        </Link>
      </div>

      {/* chocolate add input field  */}

      <div className="mt-10 bg-pink-200 py-10 px-10 rounded">
        <div className="">
          <p className="text-3xl font-bold text-center">New Chocolates</p>
          <p className=" mt-3 text-gray-500 text-center">
            Use the below form to create a new product
          </p>
        </div>
        <form onSubmit={handleAdd} className="px-[200px]">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold ">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="chocolate name "
                className="input input-bordered w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold ">Country</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter Country Name "
                className="input input-bordered w-full"
                name="country"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold ">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter quality "
                className="input input-bordered w-full"
                name="quality"
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              className="text-white bg-[#91572B] text-center w-full py-2 rounded mx-1 mt-2 btn focus:bg-gray-500 text-xl"
              value="Add Chocolate"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
