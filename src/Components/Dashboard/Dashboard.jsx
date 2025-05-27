// import React,{useState} from 'react'
// import Leftbar from './Leftbar'
// import MainBody from './Mainbody'


// const Dashboard = ({collapsed,setCollapsed}) => {
//   const userRole = "admin";
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <div className='pt-16 flex '>
//       <Leftbar role={userRole} collapsed={collapsed} setCollapsed={setCollapsed} />
//       <div className={`transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'} p-6 w-full`}>
//         <MainBody />
//       </div>
//     </div>
//   )
// }

// export default Dashboard

const Dashboard = ({ collapsed, setCollapsed }) => {
  const userRole = "admin";

  return (
    <div className="pt-16 flex">
      <Leftbar role={userRole} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'} w-full`}>
        <div className="p-4 sm:p-6">
          <MainBody />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
