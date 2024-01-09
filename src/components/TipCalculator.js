import { useState } from "react";
import BillAmount from "./BillAmount";
import Rating from "./Rating";
import Reset from "./Reset";
import TotalBill from "./TotalBill";

function calculateTipAmount(amount, rating1, rating2) {
  const tip1 = (amount / 100) * Number(rating1);
  const tip2 = (amount / 100) * Number(rating2);
  return (tip1 + tip2) / 2;
}

export default function TipCalculator() {
  const [amount, setAmount] = useState(0);
  const [myRating, setMyRating] = useState("0");
  const [myFriendRating, setMyFriendRating] = useState("0");

  const tipAmount = calculateTipAmount(amount, myRating, myFriendRating);

  function handleReset() {
    setAmount(0);
    setMyRating("0");
    setMyFriendRating("0");
  }

  return (
    <div>
      <BillAmount amount={amount} onChangeAmount={setAmount} />
      <Rating rating={myRating} onRatingChange={setMyRating}>
        How much did you like the service?
      </Rating>
      <Rating rating={myFriendRating} onRatingChange={setMyFriendRating}>
        How much did your friend like the service?
      </Rating>
      {amount !== 0 && (
        <div>
          <TotalBill amount={amount} tipAmount={tipAmount} />
          <Reset onReset={handleReset} />
        </div>
      )}
    </div>
  );
}
