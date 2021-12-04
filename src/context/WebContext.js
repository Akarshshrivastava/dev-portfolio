// import React, { useContext, useState } from "react";

// const WebContext = React.createContext();

// export const useWebContext = () => {
//   return useContext(WebContext);
// };

// const WebProvider = ({ children }) => {
//   const [pageview, setPageview] = useState(true);
//   const scroll = (ref) => {
//     ref.current.scrollIntoView();
//   };
//   const value = {
//     pageview,
//     setPageview,
//     scroll,
//   };
//   return (
//     <WebContext.Provider value={value}>
//       <div>{children}</div>
//     </WebContext.Provider>
//   );
// };

// export default WebProvider;
