import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { gifts, headers, occasions } from "../constants";

const GiftCard = ({
  index,
  image,
  name,
  description,
  category,
  cost,
  onSelect,
}) => {
  return (
    <div className="flex flex-col">
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-white p-[10px] rounded-[12px] sm:w-[300px] w-full gap-[18px] justify-between flex-1 flex flex-col border border-primary"
      >
        <div className="relative w-full h-[160px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <h3 className={`${styles.bodySubHeaderDark}`}>{name}</h3>
          <p className={`${styles.bodyFormPlaceholder}`}>
            Category: {category}
          </p>
        </div>
        <div>
          <p className={`${styles.bodyFormDark}`}>{description}</p>
        </div>
        <div className="flex flex-row justify-between w-full items-center">
          <h3 className={`${styles.buttonOrange}`}>${cost}</h3>
          <div
            className={`rounded-full px-[20px] py-[5px] cursor-pointer bg-primary ${styles.bodySubHeaderWhite} `}
            onClick={onSelect}
          >
            Select
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Hero = (props) => {
  const [activeId, setActiveId] = useState("occasionsel");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const filteredHeaders = headers.filter((Header) => Header.id === activeId);

  const filteredGifts = gifts.filter(
    (Gift) => Gift.category === selectedOccasion
  );
  const handleGiftSelect = () => {
    handleSubmit();
    setSelectedOccasion("");
  };

  const handleSubmit = () => {
    props.onClick(activeId);
    if (activeId === "giftsel") {
      setActiveId("occasionsel");
    } else if (activeId === "occasionsel") {
      setActiveId("giftsel");
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={` ${
          activeId !== "occasionsel" ? "hidden" : "flex"
        } absolute inset-0 top-[64px] max-w-7xl lg:mx-[64px] mx-[32px] lg:mt-[64px] mt-[32px] flex flex-col gap-[32px] lg:gap-[64px] items-start`}
      >
        {filteredHeaders.map((Header) => (
          <div
            key={Header.id}
            className={`${styles.headerOrange} mt-[64px] -mb-[24px]`}
          >
            {Header.content}
          </div>
        ))}
        <div className="flex flex-col gap-[18px]">
          <div className={`${styles.bodyHeaderDark}`}>
            Enter the occasion for gifting.
          </div>
          <div className="flex flex-wrap gap-[30px]">
            {occasions.map((Occasion, index) => (
              <div
                key={`${index}`}
                className="flex flex-row items-center gap-[6px] cursor-pointer"
                onClick={() => setSelectedOccasion(Occasion.Name)}
              >
                <div className="w-[21px] h-[21px] border flex border-primary border-[2px] rounded-full items-center justify-center">
                  {" "}
                  <div
                    className={` ${
                      selectedOccasion === Occasion.Name ? "flex" : "hidden"
                    } bg-primary w-[12px] h-[12px] rounded-full`}
                  ></div>
                </div>
                <div className={`${styles.bodySubHeaderDark} `}>
                  {Occasion.Name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`rounded-full px-[20px] py-[5px] cursor-pointer bg-primary ${styles.buttonWhite} `}
          onClick={handleSubmit}
        >
          Submit
        </div>
      </div>
      <div
        className={` ${
          activeId !== "giftsel" ? "hidden" : "flex"
        } absolute inset-0 top-[64px] max-w-9xl lg:mx-[64px] mx-[32px] lg:mt-[64px] mt-[32px] flex flex-col gap-[32px] lg:gap-[24px] items-start`}
      >
        {filteredHeaders.map((Header) => (
          <div key={Header.id} className={`${styles.headerOrange} mt-[64px]`}>
            {Header.content}
          </div>
        ))}
        <div className="flex flex-row px-[20px] py-[20px] bg-primary w-full items-center justify-between">
          <div className={`${styles.bodySubHeaderWhite}`}>
            Rest assured, these are the best choices for your loved ones.
          </div>
          <div
            className={`rounded-full px-[20px] py-[5px] bg-white cursor-pointer ${styles.buttonOrange} `}
            onClick={() => {
              handleSubmit();
              setSelectedOccasion("");
            }}
          >
            Change Parameters
          </div>
        </div>
        <div className="mt-10 flex w-full flex-wrap justify-between items-stretch">
          {filteredGifts.map((Gift, index) => (
            <GiftCard
              key={`gift-${index}`}
              index={index}
              {...Gift}
              onSelect={handleGiftSelect}
              className="flex-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
