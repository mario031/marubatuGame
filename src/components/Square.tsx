import "./Square.css";

interface ISquareProps {
  value: string;
  onClick: Function;
}

export const Square = (props: ISquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}