





<form onSubmit={handleSubmit(onSubmitData)}>


<div className="grid sm:grid-cols-2 mb-1.5">
    <label className="ml-[40%] mt-2 font-semibold">Email</label>
    <label className="ml-[2.5%] mt-2 font-semibold">Contact</label>
</div>
<div className="grid sm:grid-cols-2 gap-8 mb-3">
    <input
        className="border border-gray-400 ml-[40%] rounded-md"
        name="email"
        {...register("email")}
        type="email"
        placeholder="Enter Email ID"
    />

    <input
        className="border border-gray-400 mr-[40%] rounded-md"
        name="contact"
        {...register("contact")}
        type="telephone"
        placeholder="Enter Contact Number"
    />
</div>
<div className="grid sm:grid-cols-2 mb-1.5">
    <label className="ml-[40%] mt-2 font-semibold">Password</label>
    <label className="ml-[2.5%] mt-2 font-semibold">Confirm Password</label>
</div>
<div className="grid sm:grid-cols-2 gap-8 mb-3">
    <input
        className="border border-gray-400 ml-[40%] rounded-md"
        name="password"
        {...register("password")}
        type="password"
        placeholder="Enter Password"
    />

    <input
        className="border border-gray-400 mr-[40%] rounded-md"
        name="confirmpassword"
        {...register("confirmpassword")}
        type="password"
        placeholder="Re-Enter Password"
    />
</div>
<div className="grid sm:grid-cols-2 mb-1">
    <label className="ml-[40%] mt-2 mb-3 font-semibold">Gender</label>
    <label className="ml-[2.5%] mt-2 font-semibold">Upload Photo Here</label>
</div>
<div className="mb-5">
    <input className="ml-[24%]" name="gender" {...register("gender")} type="radio" value="Male" />
    <label className="ml-[0.5%] mr-[4%]">Male</label>
    <input name="gender" {...register("gender")} type="radio" value="Female" />
    <label className="ml-[0.5%] mr-[4%]">Female</label>
    <input name="gender" {...register("gender")} type="radio" value="Other" />
    <label className="ml-[0.5%]">Other</label>

    <input className="ml-20" name="uploadimage" type="file" />
</div>
<div className="grid sm:grid-cols-2 mb-1.5">
    <label className="ml-[40%] mt-2 font-semibold">Aadhar Number</label>
    <label className="ml-[2.5%] mt-2 font-semibold">Pan Card ID</label>
</div>
<div className="grid sm:grid-cols-2 gap-8 mb-5">
    <input
        className="border border-gray-400 ml-[40%] rounded-md"
        name="aadharnumber"
        {...register("aadharnumber")}
        placeholder="Enter Aaadhar Number"
    />

    <input
        className="border border-gray-400 mr-[40%] rounded-md"
        name="panid"
        {...register("panid")}
        type="text"
        placeholder="Enter PAN Card Number"
    />
</div>
<div className="grid sm:grid-cols-2 mb-1">
    <label className="ml-[40%] mt-2 mb-3 font-semibold">Courses</label>
    <label className="ml-[2.5%] mt-2 font-semibold">Nationality</label>
</div>
<div className="grid sm:grid-cols-2 gap-8 mb-5">
    <select
        name="courses"
        {...register("courses")}
        className="ml-[40%] border border-gray-400 rounded-md"
    >
        <option value="">Select Course--------</option>
        <option value="B.Tech">B.Tech</option>
        <option value="B.Sc.">B.Sc.</option>
        <option value="B.E.">B.E.</option>
        <option value="BCA">BCA</option>
        <option value="BCS">BCS</option>
    </select>

    <select
        name="nationality"
        {...register("nationality")}
        className="mr-[40%] border border-gray-400 rounded-md"
    >
        <option value="">Select Nationality-------</option>
        <option value="Indian">Indian</option>
        <option value="OutOfIndia">Out Of India</option>
    </select>
</div>
<div className="grid sm:grid-cols-2 mb-1">
    <label className="ml-[40%] mt-2 mb-3 font-semibold">Address</label>
</div>

<div className="grid sm:grid-cols-2 gap-8 mb-5">
    <textarea
        name="address"
        {...register("address")}
        rows="5"
        cols="80"
        className="ml-[40%] w-[125%] border border-gray-400"
    ></textarea>
</div>
<div className="flex justify-center mb-9">
    <button type="submit" className="px-[5%] rounded-md border border-black bg-black text-white">
        Submit
    </button>
</div>
</form>
