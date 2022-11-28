
export default MediaSlider = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-10 mb-5">Product</h2>

      <div className="w-full border-t border-gray-200" />

      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center space-x-2">
          <h3>Media Slider</h3>
          <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">uses RadixUI</span>
        </div>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded-md px-3 py-2" onChange={(e) => setCMS(e.target.value)}>
            <option value="sanity">Sanity</option>
            <option value="builder">Builder</option>
            <option value="plasmic">Plasmic</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2" onChange={(e) => setPlatform(e.target.value)}>
            <option value="swell">Swell</option>
            <option value="Shopify">Shopify</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Slider />
      </div>
  </div>
  )
}