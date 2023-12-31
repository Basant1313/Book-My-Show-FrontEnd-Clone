import { Disclosure } from '@headlessui/react';
import {BiChevronUp , BiChevronDown} from "react-icons/bi";

const PlaysFilter = (props) => {

    // instead of using both <BiChevronUp /> or <BiChevronDown /> we can use one of them and apply css rotate-90 transform it.
  return (
    <Disclosure >
        {({ open }) => (
            <>
            <Disclosure.Button className="py-2 flex items-center gap-3 bg-white w-64 rounded-md my-3 px-2">
              {open ? <BiChevronUp /> : <BiChevronDown />}  
            <span className={ open ? "text-red-600" : "text-gray-700"}>
            {props.title}
            </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 bg-white w-64 items-center">
        <div className='flex items-center gap-3 flex-wrap'>
            {props.tags.map((tag) => (
                <>
                <div className='border-2 border-gray-200 p-2 '>
                    <span className='text-red-600'>{tag}</span>
                </div>
                </>
            ))
                
            }
        </div>
      </Disclosure.Panel>
            </>
        )}
      
    </Disclosure>
  );
};

export default PlaysFilter;



