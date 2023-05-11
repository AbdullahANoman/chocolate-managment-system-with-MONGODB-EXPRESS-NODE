import React from "react";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const SingleChocolate = ({ chocolate,allChocolate,setChocolate }) => {
  const { _id, name, country, quality } = chocolate;
  console.log(name, country, quality);

  const handleUpdate = (_id) => {
    console.log(_id);
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Chocolate/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                const remaining = allChocolate.filter(p=>p._id !== _id);
                setChocolate(remaining)
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <th>1</th>
        <td>{name}</td>
        <td>{country}</td>
        <td>{quality}</td>
        <td className="flex items-center gap-5 text-2xl">
          <FaPen onClick={() => handleUpdate(_id)} className=""></FaPen>
          <p
            onClick={() => handleDelete(_id)}
            className="text-3xl bg-sky-600 cursor-pointer px-2 py-1 text-white rounded-lg"
          >
            X
          </p>
        </td>
      </tr>
    </>
  );
};

export default SingleChocolate;
