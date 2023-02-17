"use client";
import React, { useState, useRef } from "react";

// prime react components
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import styles from "./page.module.css";

// local component imports
import FirstPolicy from "./components/firstPolicy/page";
import SecondPolicy from "./components/secondPolicy/page";
import ThirdPolicy from "./components/thirdPolicy/page";
import FourthPolicy from "./components/fourthPolicy/page";
import FifthPolicy from "./components/fifthPolicy/page";
import SixthPolicy from "./components/sixthPolicy/page";
import SeventhPolicy from "./components/seventhPolicy/page";
import EighthPolicy from "./components/eighthPolicy/page";


// react hook form
import { useForm } from "react-hook-form";


export default function Home() {


  const [selectedCity, setSelectedCity] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState("");
  const [smoke, setSmoke] = useState("");
  const [spouse, setSpouse] = useState("");
  const [child, setChild] = useState("");
  const [spouseVisibility, setspouseVisibility] = useState(false);


  // steps
  const [stepsVisibility, setStepsVisibility] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);


  // for spouse
  const [spouseMonth, setSpouseMonth] = useState(null);
  const [spouseYear, setSpouseYear] = useState(null);
  const [spouseGender, setSpouseGender] = useState("");
  const [spouseSmoke, setSpouseSmoke] = useState("");


  // initial continue btn
  const [continueBtnVisible, setContinueBtnVisible] = useState(true);

  // for steps
  const items = [
    {
      label: "First Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "First Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Second Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Second Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Third Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Third Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Fourth Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Fourth Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Fifth Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Fifth Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Sixth Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Sixth Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Seventh Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Seventh Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Eighth Policy",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Eighth Policy",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
  ];

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const monthName = [
    { name: "January" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const yearName = [
    { name: "1999" },
    { name: "1998" },
    { name: "1997" },
    { name: "1996" },
    { name: "1995" },
  ];

  const genderFunc = (e) => {
    setGender(e.value);
    e.value === "female"
      ? setspouseVisibility(true)
      : setspouseVisibility(false);
  };

  // go to top func
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setStepsVisibility(true);
    setContinueBtnVisible(false);
  };

  // prev func
  const prevFunc = () => {
    setActiveIndex(activeIndex - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // next func
  const nextFunc = () => {
    setActiveIndex(activeIndex + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //react hook form 
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const onSubmit = data => console.log('yo',data);

  return (
    <main>
      <div className="bg-blue-50 pb-8">
        {/* steps components */}
        {stepsVisibility && (
          <div className="pt-1">
            {activeIndex === 0 && <FirstPolicy />}
            {activeIndex === 1 && <SecondPolicy />}
            {activeIndex === 2 && <ThirdPolicy />}
            {activeIndex === 3 && <FourthPolicy />}
            {activeIndex === 4 && <FifthPolicy />}
            {activeIndex === 5 && <SixthPolicy />}
            {activeIndex === 6 && <SeventhPolicy />}
            {activeIndex === 7 && <EighthPolicy />}
          </div>
        )}

        {/* steps pagination */}
        {stepsVisibility && (
          <div className="card m-8 mb-0">
            <Toast ref={toast}></Toast>
            <Steps
              model={items}
              activeIndex={activeIndex}
              onSelect={(e) => setActiveIndex(e.index)}
              readOnly={false}
            />
          </div>
        )}

        {/* default screen */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div  className="p-8">
            <div class="grid primaryBg">
              <div className="col-2 p-8">
                <div
                  className="flex align-items-center justify-content-center secondaryBg"
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                >
                  <i className="pi pi-user"></i>
                </div>
              </div>
              <div className="col p-6 pl-0">
                <div className="wrap">
                  <h2 className="mb-5">TELL US ABOUT YOURSELF</h2>

                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">Select your province:</p>
                    </div>
                    <div className="col-6">
                      <Dropdown
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder="Select a City"
                        // className="w-full md:w-14rem"
                        style={{ width: "80%" }}
                        {...register('city',{required:true})}
                        value={selectedCity}
                      />
                      <p className="text-red-500 text-md mt-2 font-semibold">
                        {errors.city?.type==='required'&& 'City is required'}
                      </p>
                      {/* <input type="text" {...register('demo',{required:true})} placeholder="demo"/>
                      <p className="text-red-500 text-md mt-2 font-semibold">
                        {errors.demo?.type==='required'&& 'demo is required'}
                      </p> */}
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">Your gender:</p>
                    </div>
                    <div className="col-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={(e) => setSpouse(e.value)}
                            checked={spouse === "Cheese"}
                          />
                          <label htmlFor="ingredient1" className="ml-2">
                            Male
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={(e) => setSpouse(e.value)}
                            checked={spouse === "Mushroom"}
                          />
                          <label htmlFor="ingredient2" className="ml-2">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">Your date of birth:</p>
                    </div>
                    <div className="col-6">
                      <Dropdown
                        value={month}
                        onChange={(e) => setMonth(e.value)}
                        options={monthName}
                        optionLabel="name"
                        placeholder="Select a Month"
                        // className="w-full md:w-14rem"
                        style={{ width: "38%", marginRight: "2%" }}
                      />
                      <Dropdown
                        value={year}
                        onChange={(e) => setYear(e.value)}
                        options={yearName}
                        optionLabel="name"
                        placeholder="Select a Year"
                        // className="w-full md:w-14rem"
                        style={{ width: "38%", marginLeft: "2%" }}
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">Do you smoke?</p>
                    </div>
                    <div className="col-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={(e) => setSmoke(e.value)}
                            checked={smoke === "Cheese"}
                          />
                          <label htmlFor="ingredient1" className="ml-2">
                            Yes
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={(e) => setSmoke(e.value)}
                            checked={smoke === "Mushroom"}
                          />
                          <label htmlFor="ingredient2" className="ml-2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">Do you have a spouse?</p>
                    </div>
                    <div className="col-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="gender2"
                            name="gender"
                            value="female"
                            onChange={genderFunc}
                            checked={gender === "female"}
                          />
                          <label htmlFor="gender2" className="ml-2">
                            Yes
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="gender1"
                            name="gender"
                            value="male"
                            onChange={genderFunc}
                            checked={gender === "male"}
                          />
                          <label htmlFor="gender1" className="ml-2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">
                        Do you have dependent child(ren)?
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={(e) => setChild(e.value)}
                            checked={child === "Cheese"}
                          />
                          <label htmlFor="ingredient1" className="ml-2">
                            Yes
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={(e) => setChild(e.value)}
                            checked={child === "Mushroom"}
                          />
                          <label htmlFor="ingredient2" className="ml-2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* for spouse */}
            {spouseVisibility && (
              <div className="grid primaryBg">
                <div className="col-2 p-8">
                  <div
                    className="flex align-items-center justify-content-center secondaryBg"
                    style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                  >
                    <i className="pi pi-user"></i>
                  </div>
                </div>
                <div className="col p-6 pl-0">
                  <div className="wrap">
                    <h2 className="mb-5">TELL US ABOUT YOUR SPOUSE</h2>
                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">Spouse's gender:</p>
                      </div>
                      <div className="col-6">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex align-items-center">
                            <RadioButton
                              inputId="ingredient1"
                              name="pizza"
                              value="Cheese"
                              onChange={(e) => setGender(e.value)}
                              checked={gender === "Cheese"}
                            />
                            <label htmlFor="ingredient1" className="ml-2">
                              Male
                            </label>
                          </div>
                          <div className="flex align-items-center">
                            <RadioButton
                              inputId="ingredient2"
                              name="pizza"
                              value="Mushroom"
                              onChange={(e) => setGender(e.value)}
                              checked={gender === "Mushroom"}
                            />
                            <label htmlFor="ingredient2" className="ml-2">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">
                          Spouse's date of birth:
                        </p>
                      </div>
                      <div className="col-6">
                        <Dropdown
                          value={month}
                          onChange={(e) => setMonth(e.value)}
                          options={monthName}
                          optionLabel="name"
                          placeholder="Select a Month"
                          // className="w-full md:w-14rem"
                          style={{ width: "38%", marginRight: "2%" }}
                        />
                        <Dropdown
                          value={year}
                          onChange={(e) => setYear(e.value)}
                          options={yearName}
                          optionLabel="name"
                          placeholder="Select a Year"
                          // className="w-full md:w-14rem"
                          style={{ width: "38%", marginLeft: "2%" }}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">
                          Does your spouse smoke?{" "}
                        </p>
                      </div>
                      <div className="col-6">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex align-items-center">
                            <RadioButton
                              inputId="ingredient1"
                              name="pizza"
                              value="Cheese"
                              onChange={(e) => setSmoke(e.value)}
                              checked={smoke === "Cheese"}
                            />
                            <label htmlFor="ingredient1" className="ml-2">
                              Yes
                            </label>
                          </div>
                          <div className="flex align-items-center">
                            <RadioButton
                              inputId="ingredient2"
                              name="pizza"
                              value="Mushroom"
                              onChange={(e) => setSmoke(e.value)}
                              checked={smoke === "Mushroom"}
                            />
                            <label htmlFor="ingredient2" className="ml-2">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* continue button */}
          <div className="card flex justify-content-center ">
            <Button
              label="Continue"
              onClick={goToTop}
              style={{ display: !continueBtnVisible ? "none" : "" }}
              type='submit'
            />
          </div>
        </form>

        {/* btns */}
        {stepsVisibility && (
          <div className="flex justify-content-between align-items-center w-8 mx-auto bg-blue-50 p-4">
            {/* prev btn */}
            <div className="card flex justify-content-center">
              <Button
                label="Prev"
                onClick={prevFunc}
                style={{ display: activeIndex === 0 ? "none" : "" }}
              />
            </div>

            {/* next btn */}
            <div className="card flex justify-content-center">
              <Button
                style={{ display: activeIndex === 7 ? "none" : "" }}
                label="Continue"
                onClick={nextFunc}
              />
            </div>
          </div>
        )}
      </div>

      {/* demo text */}
      <p className="m-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, numquam
        vel facere minima aliquam, iste vitae expedita quam voluptatum aut magni
        enim reiciendis sapiente incidunt impedit ullam harum. Doloribus
        repellendus cupiditate ipsum sapiente sequi exercitationem facilis velit
        cumque non minima nemo, sint veniam soluta illo molestiae incidunt.
        Fugiat ad, cumque consequuntur obcaecati a nesciunt optio animi tenetur,
        quos sequi dolores amet iste officiis repudiandae aliquid ipsam sed at
        quia! Dignissimos ex inventore sint ratione earum veniam in? Incidunt
        quas dolores at, recusandae culpa, quisquam neque facilis sint id in
        dolorum est a dolor excepturi? Alias possimus explicabo ducimus odio
        vitae eaque. Maiores, accusamus odio? Nemo obcaecati totam ea minus
        nostrum, aperiam nam sequi porro harum quia explicabo autem consequatur
        magnam necessitatibus enim, est velit hic deleniti earum, numquam
        facilis voluptatum sint voluptatem. Praesentium eligendi eaque nisi,
        dolor aliquam sequi voluptates ut enim asperiores eveniet possimus
        cumque assumenda facere delectus, blanditiis voluptatem dolores
        accusamus beatae ad aspernatur sed error vero omnis. Eius labore animi
        sapiente aperiam, asperiores voluptatibus ducimus neque eaque modi
        placeat, minus enim voluptatum. Est ut quasi quis architecto nesciunt
        repellendus enim laboriosam voluptates. Sint reprehenderit vitae rem
        alias asperiores. Nulla repellat ea itaque exercitationem deserunt
        provident cupiditate asperiores, assumenda doloribus cumque corrupti,
        autem in voluptates vero aliquam, dolorum ipsa veniam! Repudiandae
        beatae dolor fugit eaque ipsum voluptatem, consectetur quis! Repellat
        sint nostrum debitis. Obcaecati nostrum magnam quos ratione odit,
        temporibus ipsum quam quia mollitia quis quasi quo eligendi
        necessitatibus saepe praesentium blanditiis quae impedit dolorem
        similique. Adipisci illo repellendus natus suscipit, nobis nostrum
        consequatur minus ab quos soluta. Accusantium nihil pariatur tempore.
        Nulla repellat modi officiis voluptatibus molestiae quisquam illum
        blanditiis autem esse laborum! Illo possimus aliquam maxime ipsa iusto
        itaque officia dicta ullam, ducimus cupiditate iste magnam modi
        recusandae adipisci ipsam beatae aspernatur eaque praesentium, velit
        culpa, sunt ad qui temporibus. Quo delectus beatae neque dicta qui
        facere id minus doloremque earum? Laborum et aliquid ut animi vel sequi
        doloremque ad perferendis, quod cupiditate a. Voluptatem ipsam placeat
        distinctio reprehenderit illum est aperiam provident? Cumque placeat
        quasi vel illo assumenda maiores repellat magnam, omnis tempore nemo
        perspiciatis esse ad totam illum praesentium numquam quam dolorum ea
        eligendi. Ducimus, magnam accusantium aut natus sit beatae
        necessitatibus accusamus deserunt temporibus assumenda iusto autem
        placeat minima, facere iure doloribus ex quod nesciunt. Dolorem
        accusamus, fugit repellendus, nostrum, fuga architecto obcaecati
        asperiores ab nam iure delectus impedit. Recusandae, dicta minus
        incidunt excepturi aut omnis? Fugit, saepe, fuga enim nihil quisquam
        tempora tempore repellendus, vitae voluptas id molestias illo. Tempore
        inventore quae, blanditiis, cumque odio optio eum ea ut iusto autem
        doloribus officiis, voluptates fugit amet nemo libero accusantium a. Est
        laudantium officiis, porro molestias, velit ipsam repellat deleniti
        aliquid nisi facilis aspernatur. Eligendi eum deserunt laboriosam maxime
        ex nostrum delectus inventore fugiat dicta! Itaque officia ducimus velit
        consectetur similique nesciunt aspernatur iure in perferendis labore
        aliquam suscipit maxime placeat molestiae ea natus animi odio,
        praesentium reprehenderit nam nihil tempora! Consectetur totam doloribus
        eligendi cum suscipit perferendis sit odit exercitationem quas beatae.
      </p>
    </main>
  );
}
