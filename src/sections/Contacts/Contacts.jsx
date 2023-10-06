import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Form from "./Form";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";
import adress from "../../assets/address.svg";
import map from "../../assets/map.svg";

const Contacts = () => {
  return (
    <div className="relative">
      <div className="contacts container-2xl mx-auto w-full max-w-screen-2xl pb-[94px] pt-40">
        <Title className="mb-[126px]">Contact us</Title>
        <div className="flex justify-center">
          <Form />
          <div className="flex-1 pl-[260px] pt-6">
            <div className="space-y-16">
              <div className="space-y-3">
                <div className="mb-6 flex items-end">
                  <img src={phone} alt="phone icon" className="-ml-8" />
                  <h4 className="ml-3 text-lg font-bold">Mobile number</h4>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-[#B6B6B6]">+1 252-937-3762</p>
                  <Button className="px-11 py-0 text-sm font-normal leading-7">
                    Call
                  </Button>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-[#B6B6B6]">+1 252-937-3762</p>
                  <Button className="px-11 py-0 text-sm font-normal leading-7">
                    Call
                  </Button>
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-end">
                  <img src={message} alt="message icon" className="-ml-8" />
                  <h4 className="ml-3 text-lg font-bold">E-mail</h4>
                </div>
                <p className="text-[#B6B6B6]">sample@example.com</p>
              </div>

              <div>
                <div className="mb-6 flex items-end">
                  <img src={adress} alt="adress icon" className="-ml-8" />
                  <h4 className="ml-3 text-lg font-bold">Adress</h4>
                </div>
                <p className="text-[#B6B6B6]">
                  5 Indian Spring Dr. Mundelein, IL <br /> 60060
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-24 right-0 flex h-[100px] w-[136px] items-center justify-center rounded-tl-[70px] bg-primary">
            <img src={map} alt="map icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
