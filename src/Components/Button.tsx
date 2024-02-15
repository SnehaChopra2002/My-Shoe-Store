interface Props {
  handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void,
  value:string,
  title:string
}

const Button = ({handleChange,value,title}:Props) => {
  return (
    <button onClick={handleChange} className="btns" value={value}>
      {title}
    </button>
  );
};

export default Button;
