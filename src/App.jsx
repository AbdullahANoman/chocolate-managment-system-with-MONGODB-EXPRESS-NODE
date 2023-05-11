import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import SingleChocolate from "./components/SingleChocolate";

function App() {
  const loadChocolate = useLoaderData();
  const [allChocolate,setChocolate] = useState(loadChocolate)
  console.log(allChocolate);

  return (
    <>
      <div className="mx-[200px]">
        <div className="flex justify-center mt-[100px]">
          <h1 className="px-6 text-2xl font-bold text-center py-6 rounded w-[500px] text-white bg-[#91572B]">
            Chocolate Management System
          </h1>
        </div>
        <div className="mt-[100px]">
          <Link to="/addChocolate">
            <h1 className="flex items-center gap-2 border w-[200px] p-4 font-semibold">
              {" "}
              <span>
                <FaPlus></FaPlus>
              </span>{" "}
              New Chocolate
            </h1>
          </Link>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
              
              {
                allChocolate.map(chocolate=>(
                  <SingleChocolate key={chocolate._id} chocolate={chocolate} allChocolate={allChocolate} setChocolate={setChocolate}></SingleChocolate>
                ))
              }
              
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default App;
