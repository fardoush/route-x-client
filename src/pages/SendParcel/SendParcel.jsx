import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

const {user} = useAuth()

  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  // console.log(regions);

  // console.log("DBR: ", districtsByRegion(senderRegion));
  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree",
    }).then((result) => {
      if (result.isConfirmed)

// save the parcel info to the db 
axiosSecure.post('/parcels',data)
.then(res => {
  console.log('after saving parcel ',res.data)
})

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
    });
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
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
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
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="text"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>
        {/* two column  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* sender Details  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* sender name  */}
            <label className="label mt-3">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender email  */}
            <label className="label mt-3">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Sender Email"
            />
            {/* sender region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender district  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(senderRegion).map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender address  */}
            <label className="label mt-3">Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* sender phone no  */}
            <label className="label mt-3">Sender Phone No</label>
            <input
              type="text"
              {...register("senderPhone")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            {/* sender Pickup Instruction  */}
            <label className="label mt-3">Pickup Instruction</label>
            <textarea
              className="textarea w-full"
              {...register("senderPickupInstruction")}
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>

          {/* receiver info  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* Receiver name  */}
            <label className="label mt-3">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            {/* Receiver email  */}
            <label className="label mt-3">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />
            {/* Receiver region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver district  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(receiverRegion).map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver address  */}

            <label className="label mt-3">Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
            {/* Receiver phone no  */}
            <label className="label mt-3">Receiver Phone No</label>
            <input
              type="text"
              {...register("receiverPhone")}
              className="input w-full"
              placeholder="Receiver Phone No"
            />

            {/* Receiver Delivery Instruction  */}
            <label className="label mt-3">PDelivery Instruction</label>
            <textarea
              className="textarea w-full"
              {...register("receiverDeliveryInstruction")}
              placeholder="Delivery Instruction"
            ></textarea>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn btn-secondary text-black mt-6"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
