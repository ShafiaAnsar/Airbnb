"use client";
import useCountries from "@/app/hooks/UseCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  user: SafeUser | null;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  locationValue: string;
  category: {
    icon?: IconType;
    label: string;
    description: string;
  };
}
const ListingInfo: React.FC<ListingInfoProps> = ({ user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  locationValue,
  category,
}) => {
    const {getByValue} = useCountries()
    const coordinate = getByValue(locationValue)?.latlng
  return (
  <div
  className="col-span-4 gap-8 flex flex-col"
  >
    <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
        <Avatar src={user?.image}/>
            <div>
                Hosted by {user?.name}
            </div>
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
            <div> {guestCount} guests</div>
            <div>{roomCount} rooms</div>
            <div>{bathroomCount} bathrooms</div>
        </div>
    </div>
    <hr/>
    {category  && (
        <ListingCategory
        icon={category.icon}
        label={category.label}
        description={category.description}
        />
    )}
  </div>
  );
};

export default ListingInfo;
