const Button = (props) => {
  const { onclick, children, className = "" } = props;
  const ButtonClassName = className;

  return (
    <button onClick={onclick} className={ButtonClassName}>
      {children}
    </button>
  );
};

export default Button;
