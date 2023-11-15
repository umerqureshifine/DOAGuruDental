// import React from "react";
// import styled from "styled-components";
// import EditAppoint from "./EditAppoint";
// import AddAppoint from "./AddAppoint";

// function AppointTable() {
//   return (
//     <Wrapper>
//       <div className="widget-area-2 proclinic-box-shadow" id="tableres">
//         <h5 className="widget-title" id="title">
//         Appointment for 16-10-2023
//         </h5>
//         <div className="table-responsive">
//           <table className="table table-bordered table-striped">
//             <thead>
//               <tr>
//                 <th>Uid</th>
//                 <th>Patient Name</th>
//                 <th>Doctor</th>
//                 <th>Phone</th>
//                 <th>Timing</th>
//                 <th>Status</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>P101</td>
//                 <td>Umer Qureshi</td>
//                 <td>Dr.Mohit Pawar</td>
//                 <td>934839222</td>

//                 <td>9:45 AM</td>
//                 <td>
//                   <button className="btn btn-danger" id="btn1">
//                     Missed
//                   </button>
//                 </td>
//                 <td>

//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                       
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                       
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                        <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                    
//                     </ul>
//                   </div>
//                 </td>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P101</td>
//                 <td>Mohit Shahu</td>
//                 <td>Dr.Umer Khan</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <button className="btn btn-info " id="btn1">
//                     Completed
//                   </button>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P102</td>

//                 <td>Devash Ansh</td>
//                 <td>Dr.Kuldeep Kumar</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-secondary " id="btn1">
//                     Cancelled
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P103</td>
//                 <td>Ritin Pandey</td>
//                 <td>Dr.Manu Jain</td>
//                 <td>949545554</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-warning" id="btn1">
//                     Upcoming
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P104</td>
//                 <td>Anas Khan</td>
//                 <td>Dr.Vijay Datt</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-success" id="btn1">
//                     Checked-in
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                      
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P105</td>
//                 <td>Shubum Soni</td>
//                 <td>Dr.Abhinav Pandey</td>
//                 <td>939483411</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-info " id="btn1">
//                     Completed
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                   
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P106</td>
//                 <td>Udit Sahu</td>
//                 <td>Dr.Urmila Kumar</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-success" id="btn1">
//                     Checked-in
//                   </span>{" "}
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P106</td>
//                 <td>Udit Sahu</td>
//                 <td>Dr.Urmila Kumar</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-danger " id="btn1">
//                     Missed
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P106</td>
//                 <td>Udit Sahu</td>
//                 <td>Dr.Urmila Kumar</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-secondary " id="btn1">
//                     Cancelled
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>P106</td>
//                 <td>Udit Sahu</td>
//                 <td>Dr.Urmila Kumar</td>
//                 <td>837438929</td>
//                 <td>9:45 AM</td>
//                 <td>
//                   <span className="btn btn-danger " id="btn1">
//                     Missed
//                   </span>
//                 </td>
//                 <td>
                  
//                   <div class="dropdown">
//                     <button
//                       class="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                        data-bs-auto-close="outside"
//                     >
//                       Action
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li>
//                         <a class="dropdown-item " href="#">
//                         <EditAppoint/>
//                         </a>
//                       </li>
//                       <li className="dropstart">
//                         <a class="dropdown-item dropdown-toggle " data-bs-toggle="dropdown" href="#">
//                         Status Changed
//                         </a>
//                         <ul class="dropdown-menu ">
//                     <li>
//                       <a class="dropdown-item" href="#">

//                         Missed
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item " href="#">
//                       Upcoming
//                       </a>
//                     </li>

//                     <li>
//                       <a class="dropdown-item " href="#">
//                         Checked in
//                       </a>{" "}
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
                      
//                       </a>
//                     </li>
                    
//                   </ul>
//                       </li>

//                       <li>
//                         <a class="dropdown-item " href="#">
//                      <AddAppoint/>  
//                         </a>{" "}
//                       </li>
                     
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default AppointTable;
// const Wrapper = styled.div`
//   #tableres {
//     margin-top: 0rem;
//     @media screen and (max-width: 768px) {
//       width: 20rem;
//     }
//     @media screen and (min-width: 768px) and (max-width: 1020px) {
//       width: 41rem;
//     }
//   }
//   #title {
//     @media screen and (max-width: 768px) {
//       margin-top: 20px;
//     }
//   }

//   #btn1 {
//     width: 100%;

//     @media screen and (min-width: 1600px) and (max-width: 3700px) {
//       width: 75%;
//     }
//   }
// `;

import React, { useState } from 'react';
import styled from 'styled-components';

const AppointTable = () => {
  const [searchInput, setSearchInput] = useState("");

  const Table_data = [
    { uid :"1", patient:"Mohit Shau",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Umer Qureshi",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Dhani Burma",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Ragni Burma",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Rohit Shau",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Ritin Tiwari",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Dev Ansh Dubey",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Juber",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
    { uid :"2", patient:"Mohit Shau",doctor:"Dr Umer Qureshi",treatment:"root canal",timing:"9:00 Am",status:"Missed",action:"edit"},
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };


  const filteredTable_data = Table_data.filter((data) => {
    return data.patient.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <Wrapper>
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

  
      <div className="widget-area-2 proclinic-box-shadow" id="tableres">
        <h5 className="widget-title" id="title">
        Appointment for 16-10-2023
        </h5>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
          <thead>
          <tr>
            <th>Uid</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Treatment</th>
            <th>Timing</th>
            <th>Status</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {filteredTable_data.map((country, index) => (
            <tr key={index}>
              <td>{country.uid}</td>
              <td>{country.patient}</td>
              <td>{country.doctor}</td>
              <td>{country.treatment}</td>
              <td>{country.timing}</td>
              <td>{country.status}</td>
              <td>{country.action}</td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default AppointTable;
const Wrapper = styled.div`
  #tableres {
    margin-top: 0rem;
    @media screen and (max-width: 768px) {
      width: 20rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      width: 41rem;
    }
  }
  #title {
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }

  #btn1 {
    width: 100%;

    @media screen and (min-width: 1600px) and (max-width: 3700px) {
      width: 75%;
    }
  }
`;