import Image from "next/image";
import React from "react";
import BarberShopImage from "../../assets/images/barber-shop-card.svg";
import { Message, Phone, Star } from "../icons";
import Button from "../form/Button";
import classNames from "classnames";
import Link from "next/link";

const BarberShopCard = ({ barber_data }) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden w-full max-w-365 bg-white">
      <Link href={`/user/salon/profile/${barber_data.id}`}>
        <a>
          <div className="w-full h-213 relative">
            {barber_data?.profile_image ? (
              <Image
                src={barber_data?.profile_image}
                alt="barber shop"
                layout="fill"
              />
            ) : (
              <Image
                src={BarberShopImage}
                alt="barber shop"
                layout="responsive"
              />
            )}
          </div>
        </a>
      </Link>
      <div>
        <Link href={`/user/salon/profile/${barber_data.id}`}>
          <a>
            <div className="w-full text-center pt-4 pb-5 border-b border-solid border-gray-800">
              <p className="font-normal text-2xl leading-6 tracking-tighter text-black-600">
                {barber_data.shop_name}
              </p>
              <span className="font-medium text-xs leading-3 tracking-tighter text-gray-500">
                {barber_data.expert_in}
              </span>
            </div>
          </a>
        </Link>
        <div className="pt-3 pb-6 px-7 flex gap-7 flex-col">
          <div className="flex w-full justify-between">
            <div>
              <p className="font-medium text-base text-black-600 max-w-80">
                {barber_data?.experience || barber_data?.experience > 0
                  ? barber_data.experience + "Yrs Experience"
                  : "New"}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <p className="font-semibold leading-5 text-base text-black-600">
                  {barber_data?.stars || 0}
                </p>
                <div className="flex gap-1">
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        barber_data?.stars && barber_data?.stars >= 1,
                      "text-gray-600":
                      !barber_data?.stars || barber_data?.stars < 1,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        barber_data?.stars && barber_data?.stars >= 2,
                      "text-gray-600":
                      !barber_data?.stars || barber_data?.stars < 2,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        barber_data?.stars && barber_data?.stars >= 3,
                      "text-gray-600":
                      !barber_data?.stars || barber_data?.stars < 3,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        barber_data?.stars && barber_data?.stars >= 4,
                      "text-gray-600":
                        !barber_data?.stars || barber_data?.stars < 4,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        barber_data?.stars && barber_data?.stars >= 5,
                      "text-gray-600":
                      !barber_data?.stars || barber_data?.stars < 5,
                    })}`}
                  />
                </div>
              </div>
              <p className="font-normal text-base leading-6 text-black-600">
                {barber_data?.reviews || 0} Reviews
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            {barber_data?.phone_number && (
              <a href={`tel:${barber_data?.phone_number}`}>
                <Button className="py-3 pl-4 pr-5 flex gap-3 w-max whitespace-nowrap rounded-xl">
                  <Phone />
                  Call Now
                </Button>
              </a>
            )}
            <Button
              className="py-3 px-4 flex gap-3 w-max whitespace-nowrap rounded-xl border border-solid border-orange-500"
              bgColor="bg-white"
              textColor="text-orange-500"
            >
              <Message />
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberShopCard;
