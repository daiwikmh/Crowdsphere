import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { CustomButton } from "../utils/CustomButton";
import FormField from "../utils/FormField";
import { useStateContext } from "../context";

const CreateCampaign: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {createCampaign} = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    Image: "",
  });

  const handleFormFieldChange = (fieldName: keyof typeof form, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(form);
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-lg sm:p-10 p-4">
      {isLoading && <span>Loading...</span>}
      <div
        className="flex justify-center items-center
      p-4 sm:min-w-80 bg-[#3a3a43] rounded-lg"
      >
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-5 text-white">
          Start a Campaign
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-col gap-[40px]">
          <FormField
            labelName="Your Name"
            placeholder="Naruto"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange
              ('name',e)}
          />
          <FormField
            labelName="Campaign Title"
            placeholder="Write a Title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange
              ('title',e)}
          />
          <FormField
            labelName="Campaign Title"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange
              ('description',e)}
          />
          <div className="w-full flex justify-start items-center 
          p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
            <h4 className="font-epilogue font-bold text-[25px]
            text-white ml-[20px]">Get 100% of the raised amount</h4>
          </div>
          <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange
              ('target',e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange
              ('deadline',e)}
          />
          </div>
          <FormField
            labelName="Campaign Image*"
            placeholder="Place Image of Campaign"
            inputType="url"
            value={form.Image}
            handleChange={(e) => handleFormFieldChange
              ('Image',e)}
          />

          <div className=" flex justify-center items-center
          mt-[40px]">
            <CustomButton 
            btnType="submit"
            title="Submit new Campaign"
            styles="bg-[#4acd8d]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
