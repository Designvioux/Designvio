// import React, { useState } from 'react';
// import '../Component/CSS/Book.css';

// const pages = [
//   '📖 Welcome to the 3D Book!',
//   '🌟 This is Page 1',
//   '🔥 This is Page 2',
//   '🎉 This is Page 3',
//   '📚 Thanks for reading!',
// ];

// const Book = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const nextPage = () => {
//     if (currentPage <= pages.length - 1) setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 0) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="book-container">
//       <div className="book">
//         {pages.map((content, index) => (
//           <div
//             key={index}
//             className={`page ${index <= currentPage ? 'flipped' : ''}`}
//             style={{ zIndex: pages.length - index }}
//           >
//             <div className="front">
//               <div className="page-content">{content}</div>
//             </div>
//             <div className="back">
//               <div className="page-content">Back of page {index + 1}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="buttons">
//         <button onClick={prevPage} disabled={currentPage === 0}>
//           ⬅ Prev
//         </button>
//         <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
//           Next ➡
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Book;


// import React, { useState } from 'react';
// import '../Component/CSS/Book.css';

// const pages = [
//   '📘 Cover Page - RaktSetu',
//   '📖 Welcome to the 3D Book!',
//   '🌟 This is Page 1',
//   '🔥 This is Page 2',
//   '🎉 This is Page 3',
//   '📚 Thanks for reading!',
//   '🛑 Back Cover',
// ];

// const Book = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const nextPage = () => {
//     if (currentPage < pages.length - 1) setCurrentPage(prev => prev + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 0) setCurrentPage(prev => prev - 1);
//   };

//   return (
//     <div className="book-container">
//       <div className="book">
//         {pages.map((content, index) => (
//           <div
//             key={index}
//             className={`page ${index <= currentPage ? 'flipped' : ''}`}
//             style={{ zIndex: pages.length - index }}
//           >
//             <div className="front">
//               <div className="page-content">{content}</div>
//             </div>
//             <div className="back">
//               <div className="page-content">
//                 {index === 0
//                   ? 'Inside Front Cover'
//                   : index === pages.length - 1
//                   ? 'Back Cover Content'
//                   : `Back of page ${index}`}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="buttons">
//         <button onClick={prevPage} disabled={currentPage === 0}>
//           ⬅ Prev
//         </button>
//         <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
//           Next ➡
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Book;

import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../Component/CSS/Book.css';

const Page = React.forwardRef(({ children, className }, ref) => {
  return (
    <div className={`page-flip ${className}`} ref={ref}>
      <div className="page-content">{children}</div>
    </div>
  );
});

const Book = () => {
  return (
    <div className="flipbook-wrapper">
      <h1>📘 3D Book Flip</h1>
      <HTMLFlipBook
        width={300}
        height={400}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        drawShadow={true}
        flippingTime={1000}
        useMouseEvents={true}
        showCover={true}
        startPage={0}
        className="flipbook"
        usePortrait={true}
        startZIndex={0}
        autoSize
      >
        {/* Front Cover */}
        <Page className="cover">📘 Front Cover</Page>

        {/* Inner Pages */}
        <Page>Inside Front Cover</Page>
        <Page>📖 Welcome to the 3D Book!</Page>
        <Page>🌟 This is Page 1</Page>
        <Page>🔥 This is Page 2</Page>
        <Page>🎉 This is Page 3</Page>
        <Page>📚 Thanks for reading!</Page>

        {/* Back Cover */}
        <Page className="cover">🛑 Back Cover</Page>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
