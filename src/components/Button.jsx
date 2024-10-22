export const Button = ({ label, color, onClick }) => {
  const colorClass =
    color === 'red'
      ? 'bg-red-600 hover:bg-red-800 active:bg-red-900'
      : `bg-amber-600 hover:bg-amber-800 active:bg-amber-900`;

  return (
    <button
      className={`${colorClass} border-solid border-slate-300 rounded w-1/2 p-1 text-xs text-orange-100 mx-auto mb-1`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
