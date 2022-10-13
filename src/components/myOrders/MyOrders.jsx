// import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";
//  import { useEffect } from "react";
//  import { useDispatch, useSelector } from "react-redux";
//  import { getMyOrders } from "../../redux/actions/order";
// import Loader from "../layout/Loader";
//  import toast from "react-hot-toast";
// //import { useDispatch} from "react-redux";

// const MyOrders = () => {
//   // const arr = [1, 2, 3, 4];

//    const dispatch = useDispatch();

//    const { orders, loading, error } = useSelector((state) => state.orders);

//    useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: "clearError" });
//     }

//     dispatch(getMyOrders());
//   }, [dispatch, error]);



//   return (
//     <section className="tableClass">
//     {
//       loading ===false ? ( <main>
//         <table>
//           <thead>
//             <tr>
//               <th>Order Id</th>
//               <th>Status</th>
//               <th>Item Qty</th>
//               <th>Amount</th>
//               <th>Payment Method</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders && orders.map((i) => (
//               <tr key={i}>
//                 <td>#sdkfsdfdsf</td>
//                 <td>Processing</td>
//                 <td>23</td>
//                 <td>₹{21312}</td>
//                 <td>COD</td>
//                 <td>
//                   <Link to={`/order/${"asdsds"}`}>
//                     <AiOutlineEye />
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//       ) :(<Loader/> )
//     }
//     </section>
//   );
// };

// export default MyOrders;









import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import Loader from "../layout/Loader";
import toast from "react-hot-toast";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);

  return (
    <section className="tableClass">
      {loading === false ? (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderItems.cheeseBurger.quantity +
                        i.orderItems.vegCheeseBurger.quantity +
                        i.orderItems.burgerWithFries.quantity}
                    </td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>
                    </td>
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

export default MyOrders;