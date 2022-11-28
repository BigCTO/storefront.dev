import { useState } from "react"
import { RadioGroup } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const colors = [
  { name: 'Red', value: '#F56565' },
  { name: 'Orange', value: '#ED8936' },
  { name: 'Yellow', value: '#ECC94B' },
  { name: 'Green', value: '#48BB78' },
  { name: 'Teal', value: '#38B2AC' },
  { name: 'Blue', value: '#4299E1' },
  { name: 'Indigo', value: '#667EEA' },
  { name: 'Purple', value: '#9F7AEA' },
  { name: 'Pink', value: '#ED64A6' },
  { name : 'Black', value: '#000000' },
]

export default function Radio({option, checkedClasses, uncheckedClasses}) {
  const [selected, setSelected] = useState(option.values[0].name)


  return (
    <div>
      <h2 className="text-theme-base uppercase font-medium text-sm tracking-wide my-3">
        {option.name}: {selected}
      </h2>
      <RadioGroup value={selected} onChange={setSelected} className={classNames(option.name === "Color" ? `flex items-center` : `grid gap-5 grid-cols-3`)}>
        <RadioGroup.Label className="sr-only">{option.name}</RadioGroup.Label>
        {option.values.map((value, i) => {
          return (
            <RadioGroup.Option key={i} value={value.name}>
              {({ checked }) => (
      
                <span className={classNames(checked ? checkedClasses : uncheckedClasses, 'relative overflow-hidden cursor-pointer w-full flex flex-col justify-center items-center text-xs h-10', option.name === "Color" ? 'w-10 mr-3 rounded-full' : 'w-full rounded-full')}>
                  {value.image ? (
                    <img src={value.image} className="w-full h-full" />
                  ) : colors.filter((color) => color.name === value.name)[0] ? (
                    <div className="w-full h-full absolute inset-0" style={{backgroundColor: colors.filter((color) => color.name === value.name)[0].value}}></div>
                  ) : (
                    value.name
                  )}
                </span>
              
              )}
            </RadioGroup.Option>
          )
        })}
    </RadioGroup>
    </div>
  )
}