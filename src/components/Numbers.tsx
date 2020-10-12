import React, { FC } from "react";
import Button, { ButtonClickHandler } from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = (onClickNumber: ButtonClickHandler) => {
  return numbers.map((number) => (
    <Button
      text={number.toString()}
      clickHandler={onClickNumber}
      key={number}
    />
  ));
};

type Props = {
  onClickNumber: ButtonClickHandler;
};

const Numbers: FC<Props> = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

export default Numbers;
