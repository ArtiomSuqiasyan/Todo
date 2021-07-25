
export default function Button({ text, onClick, type, disabled }) {
  return (
    <button  disabled={disabled} onClick={onClick} type={type}>
      {text}
    </button>
  );
}