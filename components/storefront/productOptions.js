import Radio from "../form/radio"
import Select from "../form/select"

const product = {
  name: 'Couch',
  price: '$499.99',
  description: 'The best couch money can buy.',
  options: [
    {
      id: "6283894949",
      name: "Color",
      active: true,
      input_type: "radio",
      variant: true,
      required: true,
      attribute_id: "color",
      values: [
        {
          id: '6283894957',
          name: 'Red Plaid',
          image: '/plaid.png'
        },
        {
          id: '6283894965',
          name: 'Blue',
        },
        {
          id: '6283894973',
          name: 'Green',
        },
        {
          id: '6283894973',
          name: 'Purple',
        },
        {
          id: '6283894973',
          name: 'Yellow',
        },
      ]
    },
    {
      id: "6283894950",
      name: "Size",
      input_type: "select",
      variant: true,
      required: true,
      attribute_id: "size",
      values: [
        {
          id: '6283894951',
          name: 'Small',
        },
        {
          id: '6283894952',
          name: 'Medium',
        },
        {
          id: '6283894953',
          name: 'Large',
        },
        {
          id: '6283894953',
          name: 'X-Large',
        }
      ]
    },
    {
      id: "6283894949",
      name: "Inseam",
      active: true,
      input_type: "radio",
      variant: true,
      required: true,
      attribute_id: "inseam",
      values: [
        {
          id: '6283894957',
          name: '5"',
        },
        {
          id: '6283894965',
          name: '7"',
        },
        {
          id: '6283894973',
          name: '9"',
        },
      ]
    },
    {
      id: "6283894949",
      name: "Liner",
      active: true,
      input_type: "radio",
      variant: true,
      required: true,
      attribute_id: "liner",
      values: [
        {
          id: '6283894957',
          name: 'Liner',
        },
        {
          id: '6283894965',
          name: 'Linerless',
        },
      ]
    },
  ]
}


export const ProductOptions = () => {

  return(
   
    <div className='flex justify-center'>
      <div className="w-[350px] border border-gray-100 shadow-md rounded-sm p-5">
        
        {product.options.map((option) => (
          <div className="pb-4 w-full" key={option.name}>
            {option.input_type === 'radio' ? (
              // turn this into its own component
              <Radio 
                option={option} 
                checkedClasses={'border-2 border-black'} 
                uncheckedClasses={'border border-gray-300'}
              />

            ) : option.input_type === 'select' ? (
              // turn this into its own component
              <Select option={option} />
            ) : null}
            
          </div>
        ))}
      </div>
    </div>
  
 
  )
}

