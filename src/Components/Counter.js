import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/testSlice/testSlice";
import { Card, Button } from "react-bootstrap";
import ws from "../ws.jpg";

const Counter = () => {
  const words = useSelector((state) => state.counter_store.dictionary);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundImage: `url(${ws})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "1450px",
        height: "705px",
      }}
    >
      <div
        style={{
          width: "1450px",
          height: "702.5px",
          overflow: "scroll",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          opacity: "75%",
        }}
      >
        {words.map((word, index, key) => (
          <Card
            key={index}
            style={{
              width: "20rem",
              margin: "10px",
            }}
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              {index + 1}
              <Card.Title>{word.scrambled}</Card.Title>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="success"
                  style={{ margin: "2.5px" }}
                  onClick={() => {
                    alert(`First character: ${word.word.charAt(0)}`);
                  }}
                >
                  Clue
                </Button>
                <Button
                  style={{ margin: "2.5px" }}
                  onClick={(event) => {
                    event.preventDefault();
                    alert(
                      ` Word: ${word.word}\n\n Definition: ${word.definition}\n\n Type: ${word.type}`
                    );
                  }}
                >
                  Definition
                </Button>
                <Button
                  style={{ margin: "2.5px" }}
                  variant="danger"
                  word={word.word}
                  //e.target.word will NOT work - getAttribute works
                  onClick={(e) =>
                    dispatch(remove(e.target.getAttribute("word")))
                  }
                >
                  remove
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Counter;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from "../features/testSlice/testSlice";
// import { Card, Button, Modal } from "react-bootstrap";
// import ws from "../ws.jpg";

// const Counter = () => {
//   const words = useSelector((state) => state.counter_store.dictionary);
//   const dispatch = useDispatch();

//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState({});

//   const handleClose = () => setShowModal(false);
//   const handleShow = (content) => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${ws})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         width: "1450px",
//         height: "705px",
//       }}
//     >
//       <div
//         style={{
//           width: "1450px",
//           height: "702.5px",
//           overflow: "scroll",
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           opacity: "75%",
//         }}
//       >
//         {words.map((word, index) => (
//           <Card
//             key={index}
//             style={{
//               width: "20rem",
//               margin: "10px",
//             }}
//           >
//             <Card.Body>
//               {index + 1}
//               <Card.Title>{word.scrambled}</Card.Title>
//               <div style={{ display: "flex", justifyContent: "center" }}>
//                 <Button
//                   variant="success"
//                   style={{ margin: "2.5px" }}
//                   onClick={() =>
//                     handleShow({
//                       title: "Clue",
//                       content: `First character: ${word.word.charAt(0)}`,
//                     })
//                   }
//                 >
//                   Clue
//                 </Button>
//                 <Button
//                   style={{ margin: "2.5px" }}
//                   onClick={() =>
//                     handleShow({
//                       title: "Definition",
//                       content: `Word: ${word.word}\n\nDefinition: ${word.definition}\n\nType: ${word.type}`,
//                     })
//                   }
//                 >
//                   Definition
//                 </Button>
//                 <Button
//                   style={{ margin: "2.5px" }}
//                   variant="danger"
//                   word={word.word}
//                   onClick={(e) =>
//                     dispatch(remove(e.target.getAttribute("word")))
//                   }
//                 >
//                   Remove
//                 </Button>
//               </div>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>

//       {/* Modal Popup */}
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{modalContent.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <pre style={{ whiteSpace: "pre-wrap" }}>{modalContent.content}</pre>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Counter;
