'use client'

import { useState } from 'react'
import formatDateToPolishLocaleString from '@/utils/formatDateToPolishLocaleString'
import { INews } from './INewsSection'
import Button from '../common/Button/Button'
import Img from '../common/Img/Img'

export default function NewsTiles({ news }: INews) {
  const colors = [
    'bg-blur-color',
    'bg-news-bg-blur-color-blue',
    'bg-news-bg-blur-color-green',
    'bg-news-bg-blur-color-blue'
  ]
  const [itemsToShow, setItemsToShow] = useState(6)
  const itemsPerPage = 6
  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsPerPage)
  }

  return (
    <div className="grid gap-8">
      {news.slice(0, itemsToShow).map(({ hero, slug, _createdAt }, index) => (
        <div
          key={index}
          className={`p-8 rounded-3xl border border-news-tiles-color md:flex ${index % 2 === 0 ? 'justify-between' : 'gap-6'} items-start relative overflow-hidden grid gap-6 gap-y-10`}
        >
          <div
            className={`absolute h-130 w-130 -left-32 -top-28 rounded-full opacity-40 blur-250 -z-10 ${colors[index % colors.length]}`}
          ></div>

          {index % 2 === 0 ? (
            <>
              <div className="grid max-w-3xl">
                <div className="flex gap-6">
                  <span>{formatDateToPolishLocaleString(_createdAt)}</span>
                  <span>•</span>
                  <span>{hero.tag}</span>
                </div>
                <h3 className="pb-6">{hero.heading}</h3>
                <p className="pb-12">{hero.text}</p>
                {slug && (
                  <Button
                    content="zadbaj o swoje zdrowie"
                    color="secondary"
                    link={`/aktualnosci/${slug}`}
                    className="sm:px-8 rounded-2xl sm:w-auto w-full px-0"
                  />
                )}
              </div>
              <Img
                data={hero.framedImage.image}
                width={333}
                height={258}
                className="h-72 object-cover object-center rounded-3xl"
              />
            </>
          ) : (
            <>
              <Img
                data={hero.framedImage.image}
                width={333}
                height={258}
                className="h-72 object-cover object-center rounded-3xl"
              />
              <div className="grid max-w-3xl">
                <div className="flex gap-6">
                  <span>{formatDateToPolishLocaleString(_createdAt)}</span>
                  <span>•</span>
                  <span>{hero.tag}</span>
                </div>
                <h3 className="pb-6">{hero.heading}</h3>
                <p className="pb-12">{hero.text}</p>
                {slug && (
                  <Button
                    content="zadbaj o swoje zdrowie"
                    color="secondary"
                    link={`/aktualnosci/${slug}`}
                    className="sm:px-8 rounded-2xl sm:w-auto w-full px-0"
                  />
                )}
              </div>
            </>
          )}
        </div>
      ))}
      {itemsToShow < news.length && (
        <div
          className="grid items-center text-center justify-center mt-8 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors gap-6"
          aria-label="Wczytaj więcej artykułów"
        >
          <div className="grid gap-3 font-semibold">
            <p>
              Widzisz {itemsToShow} z {news.length}
            </p>
            <div className="transform h-1 w-28 overflow-hidden bg-[#97B3B5] place-self-center">
              <div
                className="h-full bg-[#164346]"
                style={{ width: `${(itemsToShow / news.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <button onClick={handleLoadMore} className="flex items-center gap-2 font-semibold">
            Wczytaj więcej <ExpandMoreIcon />
          </button>
        </div>
      )}
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
