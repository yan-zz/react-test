interface ButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
