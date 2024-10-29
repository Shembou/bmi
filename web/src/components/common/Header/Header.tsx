import { IHeader } from './IHeader'
import { getCmsData } from '@/utils/getCmsData'
import { GetHeaderData } from './HeaderQueries'
import Img from '../Img/Img'
import { IMeta } from '../Meta/IMeta'

const Header = async () => {
  const data = await getCmsData<[IHeader, IMeta]>({ query: `${GetHeaderData}` })

  return (
    <header className="grid gap-4">
      <div className="flex justify-between items-center">
        {data[0].logos.map((logo, i) => (
          <Img className="flex-none" data={logo.image} width={443} height={46} key={i} />
        ))}
        <div className="flex gap-16 align-item">
          <div>
            Czcionka: <button>A</button> <button>A+</button> <button>A++</button>
          </div>
          <div>
            <div className="flex gap-2">
              Kontrast: <ContrastIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <Img data={data[1].logo} width={183} height={51} />
      </div>
    </header>
  )
}

function ContrastIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
        <path d="M3 12.18a9 9 0 1018 0 9 9 0 00-18 0z"></path>
        <path fill="#000" strokeWidth="4" d="M12 17.18a5 5 0 100-10v10z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" transform="translate(0 .18)"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Header
