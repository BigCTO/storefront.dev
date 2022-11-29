import { Switch } from '@headlessui/react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'

export default function Toggle({enabled, setEnabled}) {
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-indigo-600' : 'bg-blue-600'}
          relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Code Preview</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            flex items-center justify-center pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {enabled ? (
            <EyeIcon className="h-4 w-4"/>
            ): (
            <CodeBracketIcon className="h-4 w-4"/>
          )}
        </span>
      </Switch>
    </div>
  )
}