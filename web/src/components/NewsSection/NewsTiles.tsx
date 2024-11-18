'use client'

import { useState } from 'react'
import formatDateToPolishLocaleString from '@/utils/formatDateToPolishLocaleString'
import { INews } from './INewsSection'
import Button from '../common/Button/Button'
import Img from '../common/Img/Img'
import Pagination from '../common/Pagination/Pagination'

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
          className={`p-8 rounded-3xl border border-news-tiles-color md:flex ${index % 2 === 0 ? 'justify-between' : 'gap-6'} items-start relative overflow-hidden grid gap-6 gap-y-10 dark:border-dark-icon-bg-color`}
        >
          <div
            className={`absolute h-130 w-130 -left-32 -top-28 rounded-full opacity-40 blur-250 -z-10 ${colors[index % colors.length]} dark:bg-white`}
          ></div>

          {index % 2 === 0 ? (
            <>
              <div className="grid max-w-3xl">
                <div className="flex gap-6">
                  <span>{formatDateToPolishLocaleString(_createdAt)}</span>
                  <span>•</span>
                  <span>{hero.tag}</span>
                </div>
                <h2 className="pb-6 h3">{hero.heading}</h2>
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
                <h2 className="pb-6 h3">{hero.heading}</h2>
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
        <Pagination itemsToShow={itemsToShow} length={news.length} handleClick={handleLoadMore} />
      )}
    </div>
  )
}
