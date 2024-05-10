/* eslint-disable react/prop-types */
const Content = ({ selectedCard }) => {
  return (
    <div className="content">
      {selectedCard ? (
        <p>Has seleccionado: {selectedCard.title}</p>
      ) : (
        null
      )}
    </div>
  );
};

export default Content;
