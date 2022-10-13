// import React from "react";
// import me from "../../assets/founder.jpg";

// const Users = () => {
//   const arr = [1, 2, 3, 4];

//   return (
//     <section className="tableClass">
//       <main>
//         <table>
//           <thead>
//             <tr>
//               <th>User Id</th>
//               <th>Name</th>
//               <th>Photo</th>
//               <th>Role</th>
//               <th>Since</th>
//             </tr>
//           </thead>

//           <tbody>
//             {arr.map((i) => (
//               <tr key={i}>
//                 <td>#sdkfsdfdsf</td>
//                 <td>Abhi</td>
//                 <td>
//                   <img src={me} alt="User" />
//                 </td>
//                 <td>Admin</td>
//                 <td>{"24-23-2023"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </section>
//   );
// };

// export default Users;








import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../redux/actions/admin";
import Loader from "../layout/Loader";

const Users = () => {
  const dispatch = useDispatch();

  const { loading, users } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  return (
    <section className="tableClass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.name}</td>
                    <td>
                      <img src={i.photo} alt="User" />
                    </td>
                    <td>{i.role}</td>
                    <td>{i.createdAt.split("T")[0]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Users;
