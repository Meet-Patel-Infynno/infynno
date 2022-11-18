import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
// import confiramImae from "../../assets/images/confirmation.svg";
import confiramImae from "../../assets/images/Rectangle.png";
import Button from "../form/Button";
import { jsPDF } from "jspdf";

const Confirmation = () => {
  const { confirmServices } = useSelector((state) => state.appointment);
  const handlePdfGenerator = () => {
    const input = document.getElementById("invoice");
    const button = document.getElementById("downloadbtn");
    const star = document.getElementById("rating");
    input.style = "background: #FFEFE4";
    button.style = "display: none";
    star.style = "display: none";

    const pdf = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "letter",
    });
    let width = 670;
    pdf
      .html(input, {
        autoPaging: "text",
        html2canvas: { scale: 0.57 },
        margin: [40, 40, 40, 40],
        width: width,
        windowWidth: width,
        fontFaces: [
          {
            family: "sans-serif",
            style: "normal",
          },
        ],
      })
      .then(() => {
        input.style =
          "backround:linear-gradient(90deg, #FFEDE1 0%, #FAFEFF 100%)";
        button.style = "display: block";
        star.style = "display: block";

        pdf.save("invoice.pdf");
      });
  };
  const total = confirmServices
    ?.map((data) => data.price)
    .reduce((a, b) => a + b, 0);
  return (
    <section className="w-full flex justify-center items-center font-josefin px-2">
      <div
        id="invoice"
        className="max-w-4xl py-12 px-5 w-full bg-appointment-form shadow-confirmation-shadow flex flex-col justify-center items-center"
      >
        <div className="mb-12 w-full">
          <h2 className="font-josefin font-medium text-center text-3xl text-orange-500">
            Thank you for confirmation
          </h2>
        </div>
        <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 gap-10 lg:gap-18 lg:px-8 justify-center items-start w-full">
          <div className="flex flex-col gap-2 w-full xs:justify-center xs:items-center">
            <div className="w-full">
              <Image src={confiramImae} layout="responsive" alt="img" />
            </div>
            <div className="flex justify-between items-center w-full px-3">
              <div>
                <h2 className="font-medium text-lg md:text-2xl text-black-600">
                  Barber Shop
                </h2>
                <p className="text-xs font-normal text-black">Surat, india</p>
              </div>
              <div className="flex flex-col justify-center items-end">
                <p className="font-medium text-xs text-gray-500">
                  Color expert
                </p>
                <p className="font-medium text-xs text-black-600">
                  20+ Yrs Experience
                </p>
              </div>
            </div>
            <div
              id="rating"
              className="flex flex-col justify-center items-center mt-5"
            >
              <h2 className="font-semibold text-base text-black-600">
                5.0 ⭐⭐⭐⭐⭐
              </h2>
              <p className="font-normal text-base text-black-600">
                123 Reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full px-5">
            <h3 className="font-josefin font-medium md:text-left w-full mb-6 text-3xl text-black">
              Services
            </h3>
            <div className="w-full flex flex-col gap-6  ">
              {confirmServices?.map((data, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <div className="font-josefin font-normal text-2xl text-gray-200">
                      <p>{data.service_name}</p>
                    </div>
                    <div className="font-josefin font-normal text-lg text-yellow-600">
                      <p>.......${data.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full border border-gray-200 h-0 bg-gray-200"></div>
            <div className="flex justify-between w-full">
              <p className="font-josefin font-normal text-2xl text-gray-200">
                Total
              </p>
              <p className="font-josefin font-normal text-lg text-yellow-600">
                ${total}
              </p>
            </div>
            <div
              id="downloadbtn"
              className="w-full flex justify-center items-center mt-5"
            >
              <Button onClick={handlePdfGenerator} className={"py-3 max-w-180"}>
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
