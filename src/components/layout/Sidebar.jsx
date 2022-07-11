import React from "react";
import { BsPeople } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="conatiner">
          <div className="row">
            <div className="sideicons">
              <div className="col-md-3">
                <BsPeople></BsPeople>
              </div>
              <div className="col-md-3">
                <AiOutlineUnorderedList></AiOutlineUnorderedList>
              </div>
              <div className="col-md-3">
                <FiDownload></FiDownload>
              </div>
              <div className="col-md-3">
                <FiSettings></FiSettings>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
