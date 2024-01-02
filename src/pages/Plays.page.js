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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379202-rxmbpacfyz-portrait.jpg"
                  title="Ek Haan - Pune "
                  subtitle="Nehru Memorial Hall: Pune Hindi ₹750 onwards"
                />
              </div>
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
