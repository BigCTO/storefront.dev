import { useState } from "react"
import { Listbox, Transition } from '@headlessui/react'

export default function Radio({option}) {
  const [selected, setSelected] = useState(option.values[0].name)
  return (
    <Listbox value={selected} onChange={setSelected} className="relative z-10" as="div">
      <Listbox.Button className="w-full p-2 border-2 border-theme-base rounded-theme-base text-theme-base">{selected}</Listbox.Button>
      <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
        <Listbox.Options className="text-theme-base bg-theme-inverted border border-gray-300 mt-2 absolute top-0 inset-x-0 shadow">
        {option.values.map((value, i) => {
          return (
            <Listbox.Option
              key={i}
              value={value.name}
              className="w-full hover:text-theme-inverted hover:bg-theme-base p-2 cursor-pointer"
            >
              {value.name}
            </Listbox.Option>
          )
        })}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}