"use client";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";

const SixthPolicy = () => {
  const [value, setValue] = useState(0);
  const [spouseValue, setSpouseValue] = useState(0);
  const [child, setChild] = useState("");

  const yourPremium = (value) => {
    return Number(((value * 0.0158) / 100).toFixed(2));
  };
  const spousePremium = (value) => {
    return Number(((value * 0.0057) / 100).toFixed(2));
  };
  return (
    <div className="card m-8">
      <Card title="TERM LIFE INSURANCE">
        <p className="m-0">
          Create a safety net with this income-style benefit that helps pay
          bills that keep coming even if you have to stop working due to a
          serious illness or injury.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>

        {/* body */}
        <div className="flex my-4">
          <div className="col-4">
            <p>Your annual earned income:</p>
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
            <p>Coverage amount:</p>
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
        <div className="flex my-4">
          <div className="col-4">
            <p className="w-7">Elimination period:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9 pl-0">
              <div className="card flex justify-content-between align-items-center">
                <p className="w-7">120 days</p>
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                {
                  // console.log('c',child)
                  child === "yes" ? "$2.60" : "$0.00"
                }
                {/* ${childPremium(childValue * 5000)} */}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4">
            <p className="w-7">
              Would you like ???Cost of Living
              <br />
              Adjustment??? rider?
            </p>
          </div>
          <div className="col-8 flex">
            <div className="col-9 pl-0">
              <div className="card flex justify-content-between align-items-center">
                <div className="flex flex-wrap gap-8">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="yes"
                      onChange={(e) => setChild(e.value)}
                      checked={child === "yes"}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      Yes
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="no"
                      onChange={(e) => setChild(e.value)}
                      checked={child === "no"}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                {
                  // console.log('c',child)
                  child === "yes" ? "$2.60" : "$0.00"
                }
                {/* ${childPremium(childValue * 5000)} */}
              </p>
            </div>
          </div>
        </div>

        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          Total:{" "}
          {`${yourPremium(value * 5000) + spousePremium(spouseValue * 5000)}`}
          {/* {console.log(`"total",${yourPremium(value * 5000) + spousePremium(spouseValue * 5000)}`)} */}
        </p>
      </Card>
    </div>
  );
};

export default SixthPolicy;
