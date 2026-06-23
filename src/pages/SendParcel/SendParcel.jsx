import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>

      <h4 className="text-2xl">Enter your parcel details</h4>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* parcel type */}
        <div className="">
          <label className="label mr-4">
            <input
              type="radio"
              {...register('parcelType')}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              {...register('parcelType')}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name, weight  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
            <fieldset className="fieldset">
          <label className="label">Parcel Name</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
        </fieldset>
            <fieldset className="fieldset">
          <label className="label">Parcel Weight (KG)</label>
          <input type="text" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight (KG)" />
        </fieldset>
        </div>
        {/* two column  */}
        <div>
          {/* sender Details  */}
          <h4 className="text-2xl font-semibold">Sender Details</h4>
<fieldset className="fieldset">
    {/* sender name  */}
          <label className="label">Sender Name</label>
          <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
          {/* sender address  */}
          <label className="label mt-3">Address</label>
          <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
          {/* sender phone no  */}
          <label className="label mt-3">Sender Phone No</label>
          <input type="text" {...register('senderPhone')} className="input w-full" placeholder="Sender Phone No" />
          {/* sender District  */}
          <label className="label mt-3">Your District</label>
          <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Select Your District" />
          {/* sender Pickup Instruction  */}
          <label className="label mt-3">Pickup Instruction</label>
          <textarea className="textarea" {...register('senderPickupInstruction')} placeholder="Pickup Instruction"></textarea>
        </fieldset>

          {/* receiver info  */}
          <div></div>
        </div>

        <input type="submit" className="btn btn-secondary text-black" value="Send Parcel"/>
      </form>
    </div>
  );
};

export default SendParcel;
