export default function TotalBill({ amount, tipAmount }) {
  return (
    <h3>
      You pay ${(amount + tipAmount).toFixed(3)} (${amount.toFixed(3)} + $
      {tipAmount.toFixed(3)} tip)
    </h3>
  );
}
