import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  // flex-row-reveerse -> This will basically tell whatever child division are there inside it . we can basically have them in reverse direction.
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-8/12">
            <h2 className="text-2xl font-bold my-4">Plays in Pune </h2>

            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3  my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00369747-fnsuqsfslc-portrait.jpg"
                  title="Nathuram Godse "
                  subtitle="Bharat Natya Rang Mandir: Pune Marathi ₹400 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyNCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00364523-vlqzazxfnw-portrait.jpg"
                  title="Jar Thi Chi Goshta "
                  subtitle="Anna Bhau Sathe... Marathi ₹400 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA4IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338953-upqcfxyuyg-portrait.jpg"
                  title="Charchaughi "
                  subtitle="Bal Gandharva Rang Mandor: Pune Marathi ₹300 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00381371-lquvxkdsul-portrait.jpg"
                  title="Gostha Ithe Sampat Nahi - Panipat 13th and 14th Jan "
                  subtitle="Modern Collge Auditorium Hall: Pune Marathi ₹600 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00323608-kqbdardbwn-portrait.jpg"
                  title="Khara Khara Sang "
                  subtitle="Bal Gandharva Rang Mandir: Pune Marathi ₹300 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCA0IEphbiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00369789-bsmjgcbfeq-portrait.jpg"
                  title="MAMMA MIA! "
                  subtitle="Grand Theatre, Nita Mukesh... English ₹1200 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00118818-yjtltldbzn-portrait.jpg"
                  title="Haravlelya Pattyancha Banglaa "
                  subtitle="Tilak Samrak Mandir: Pune Marathi ₹300 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00380009-ytwtdkukrk-portrait.jpg"
                  title="How much is your iron? "
                  subtitle="Pandit Jawaharlal Nehru English ₹250 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382186-juzvbmrkwv-portrait.jpg"
                  title="Aala Afsar "
                  subtitle="The Auditorium, Elpro City... Hindi ₹350 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00118818-yjtltldbzn-portrait.jpg"
                  title="Haravlelya Pattyancha Banglaa "
                  subtitle="Tilak Samrak Mandir: Pune Marathi ₹300 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382322-synjtaylqq-portrait.jpg"
                  title="SAN 2025 "
                  subtitle="Sudarshan Rangmach: Pune English/Hindi ₹200 onwards"
                />
              </div>
              {/* <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00382208-lgsnefjhsy-portrait.jpg"
                  title="Udhedbun "
                  subtitle="The Box: Pune Hindi ₹350 onwards"
                />
              </div> */}
            </div>
          </div>
          <div className=" lg:w-1/4 ">
          <h2 className="text-2xl font-bold my-4">Filters </h2>
        <div>
            <PlaysFilter title="Date" tags={["Today","Tommorow","This Weekend"]}/>
            <PlaysFilter title="Languages" tags={["Hindi","Marathi","English","Gujarati","Urdu"]}/>
            <PlaysFilter title="Categories" tags={["Theatre","Storytelling"]}/>
            <PlaysFilter title="Genres" tags={["Drama","Comedy","Historical","Romantic","Adult","Adventure","Biography"]}/>
            <PlaysFilter title="More Filters" tags={["Outdoor Events","Fast Filling"]}/>
            <PlaysFilter title="Prices" tags={["Free","0-500","501-200-","Above 2000"]}/>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
