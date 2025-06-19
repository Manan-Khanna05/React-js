const ErrorMessage = ({ items }) => {
  return (
    <ul className="list-group">
      {items === 0 && <h3>I need Protien MF!!!!</h3>}
    </ul>
  );
};

export default ErrorMessage;
