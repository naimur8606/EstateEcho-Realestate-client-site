import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import SpecificPropertyReview from "./SpecificPropertyReview";
import CommonTitle from "../../Shared-Components/CommonTitle";
import AddReview from "./AddReview";

const PropertyDetails = () => {
    const property = useLoaderData()
    console.log(property)
    return (
        <div className="mt-[64px] md:mt-[80px]">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:py-5">
                <img className="lg:w-1/2" src={property?.propertyImage} alt="" />
                <div className="lg:w-[48%] md:pl-5 py-3 space-y-2">
                    <h2 className="text-3xl font-semibold">{property?.propertyTitle}</h2>
                    <p className="font-semibold text-xl">Price: <span className="text-2xl ">{property?.priceRange}</span></p>

                    <p className="font-semibold text-xl">Type: {property?.propertyType}</p>
                    <div className="flex items-center text-xl font-semibold">
                        <FaLocationDot className="text-[#8bff11] mr-1"></FaLocationDot>{property?.propertyLocation}
                    </div>
                    <div className="flex items-center">
                        <p className="text-base md:text-xl">{property?.verificationStatus}</p>
                        <MdVerified className="md:ml-3 text-blue-700 font-extrabold"></MdVerified>
                    </div>

                    <div className="flex items-center space-x-2 text-xl font-medium">
                        <p>Agent: {property?.agentName}</p>
                        <img className="h-10 w-10 rounded-[50%]" src={property?.agentImage} alt="" />
                    </div>
                    <button className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Add to wishlist</button>
                </div>
            </div>
            <p className="w-[97%] lg:w-full mx-auto"><span className="text-xl font-bold ">Description:</span> {property?.propertyDescription}</p>

            <div className="w-[97%] lg:w-full mx-auto my-4">
                <CommonTitle title={"Review"}></CommonTitle>
            <SpecificPropertyReview></SpecificPropertyReview>
            </div>
            <AddReview></AddReview>
        </div>
    );
};

export default PropertyDetails;