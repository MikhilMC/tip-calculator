export default function BillAmount({ amount, onChangeAmount }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value..."
        value={amount}
        onChange={(e) => onChangeAmount(Number(e.target.value))}
      />
    </div>
  );
}
