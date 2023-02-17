import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";

const SecondPolicy = () => {
  // slider value
  const [value, setValue] = useState(0);
  const [spouseValue, setSpouseValue] = useState(0);

  const yourPremium = (value) => {
    return ((value * 0.0158) / 100).toFixed(2);
  };
  const spousePremium = (value) => {
    return ((value * 0.0057) / 100).toFixed(2);
  };
  const total = () => {
    return yourPremium() + spousePremium();
  };
  return (
    <div className="card m-8">
      <Card title="TERM LIFE INSURANCE">
        <p className="m-0">
          Help protect your family’s lifestyle and their financial future if
          you’re not here to take care of them.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>

        {/* body */}
        <div className="flex my-4">
          <div className="col-4">
            <p>Your coverage:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <div className="card flex justify-content-between align-items-center">
                <Slider
                  value={value}
                  onChange={(e) => setValue(e.value)}
                  className="w-6"
                />
                <InputText
                  value={`$${value * 5000}`}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-3"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                ${/* {value *5000} */}
                {yourPremium(value * 5000)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4">
            <p>Spouse's coverage:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <div className="card flex justify-content-between align-items-center">
                <Slider
                  value={spouseValue}
                  onChange={(e) => setSpouseValue(e.value)}
                  className="w-6"
                />
                <InputText
                  value={`$${spouseValue * 5000}`}
                  onChange={(e) => setSpouseValue(e.target.value)}
                  className="w-3"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                ${spousePremium(spouseValue * 5000)}
              </p>
            </div>
          </div>
        </div>

        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          Total: ${" "}
          {`${yourPremium(value * 5000) + spousePremium(spouseValue * 5000)}`}
        </p>
      </Card>
    </div>
  );
};

export default SecondPolicy;
