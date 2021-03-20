import React from "react";
import SelectCurrency from "../../src";

const onSelectedCurrency = (currencyAbbrev) => {
  debug(`Selected ${currencyAbbrev}`);
};

function DropdownCurrency() {
  return (
    <div>
      <SelectCurrency value={"USD"} onCurrencySelected={onSelectedCurrency} />
    </div>
  );
}

export default DropdownCurrency;
