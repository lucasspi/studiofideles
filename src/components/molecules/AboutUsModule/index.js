import React from "react";
import { Container } from "../../atoms/Container";

import shield from "../../../assets/images/icon-white-shield.png";
import wallet from "../../../assets/images/icon-white-wallet.png";
import pin from "../../../assets/images/icon-white-pin.png";

const ITEMS = [
  {
    title: "Moderno e Sofisticado",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ornare felis. Nam velit neque, blandit id placerat",
    image: shield,
  },
  {
    title: "Inovação ",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ornare felis. Nam velit neque, blandit id placerat",
    image: wallet,
  },
  {
    title: "Great Starting Prices",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ornare felis. Nam velit neque, blandit id placerat",
    image: pin,
  },
];

function AboutUsModule() {
  return (
    <div className="bg-[#333] py-[70px] overflow-hidden">
      <Container
        width={["750px", null, "1170px"]}
        justifyContent="center"
        mr="auto"
        ml="auto"
      >
        <div className="flex flex-col lg:flex-row lg:gap-[48px]">
          {ITEMS.map((item, idx) => (
            <div className="md:flex-4" key={idx}>
              <div className="mb-[30px] text-white">
                <div className="flex items-center h-[85px]">
                  <i className="icon">
                    <img src={item.image} alt="" />
                  </i>
                  <h3 className="text-2xl font-bold relative left-[-16px] top-[12px]">{item.title}</h3>
                </div>

                <div className="mt-5">
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="background-wrapper">
        <div className="bg-transfer opacity-15">
          <img src="assets/img/bg-01.jpg" alt="" />
        </div>
        <div className="background-color background-color-black"></div>
      </div>
    </div>
  );
}

export { AboutUsModule };
