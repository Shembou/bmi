import { IPagination } from './IPagination'

export default function Pagination({ handleClick, itemsToShow, length }: IPagination) {
  return (
    <div
      className="grid items-center text-center justify-center mt-8 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors gap-6"
      aria-label="Wczytaj więcej artykułów"
    >
      <div className="grid gap-3 font-semibold">
        <p>
          Widzisz {itemsToShow} z {length}
        </p>
        <div className="transform h-1 w-28 overflow-hidden bg-[#97B3B5] place-self-center">
          <div
            className="h-full bg-[#164346]"
            style={{ width: `${(itemsToShow / length) * 100}%` }}
          ></div>
        </div>
      </div>
      <button onClick={handleClick} className="flex items-center gap-2 font-semibold">
        Wczytaj więcej <ExpandMoreIcon />
      </button>
    </div>
  )
}

const ExpandMoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path
      stroke="#164346"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12.375 7.234 8 10.984l-4.375-3.75"
    ></path>
    <path
      stroke="#164346"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12.375 4.734 8 8.484l-4.375-3.75"
      opacity="0.5"
    ></path>
  </svg>
)
