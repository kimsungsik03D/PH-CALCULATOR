"use client";
import { SelcetBoxProps, SelcetBox } from "@/types";
import "./style.css";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";

const Selcet = ({ customWidth = "", options = [] }: SelcetBoxProps) => {
  const [selected, setSelected] = useState<SelcetBox | null>();
  const [isOpen, setIsOpen] = useState(false);

  const onChanheHandler = (value: SelcetBox | null) => {
    setSelected(value);
    setIsOpen(!isOpen);
  };

  return (
    <Listbox
      value={selected}
      onChange={(value: SelcetBox | null) => onChanheHandler(value)}
    >
      <div className="relative my-auto">
        <Listbox.Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`custom-selectbox-button boder-focus ${customWidth}`}
        >
          <span
            className={`block truncate ${
              selected ? "text-black" : "text-gray-400"
            }`}
          >
            {selected ? selected?.name : "선택"}
            {/* {selected.name} */}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            {isOpen ? (
              <ChevronUpIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            )}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-in"
          enterFrom="transform  opacity-0"
          enterTo="transform  opacity-100"
          leave="transition duration-100 ease-in"
          leaveFrom="transform  opacity-100"
          leaveTo="transform  opacity-0"
        >
          <Listbox.Options className={`custom-selectbox-option ${customWidth}`}>
            {options.map((value, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-sky-100 text-sky-800" : "text-gray-900"
                  }`
                }
                value={value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {value.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-300">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Selcet;
