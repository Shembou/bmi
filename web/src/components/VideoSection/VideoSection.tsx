'use client'

import { useState } from 'react'
import { IVideoSection } from './IVideoSection'
import Pagination from '../common/Pagination/Pagination'

export default function VideoSection({ videos }: IVideoSection) {
  const formatYouTubeURL = (urlOrId: string) => {
    if (urlOrId.includes('watch?v=')) {
      return urlOrId.replace('watch?v=', 'embed/')
    } else if (urlOrId.startsWith('https://youtu.be/')) {
      return urlOrId.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    } else if (urlOrId.includes('youtube.com/embed/')) {
      return urlOrId
    }

    return `https://www.youtube.com/embed/${urlOrId}`
  }

  const itemsPerPage = 6
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage)
  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsPerPage)
  }

  return (
    <>
      <section>
        <div className={'grid gap-9 grid-cols-1 xl:grid-cols-3 py-24 sm:grid-cols-2'}>
          {videos &&
            videos.slice(0, itemsToShow).map(({ description, title, url }, index) => (
              <div key={index}>
                <iframe
                  height={310}
                  src={formatYouTubeURL(url)}
                  className="rounded-3xl w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h4 className="pt-3">{title}</h4>
                <p className="p3-3">{description}</p>
              </div>
            ))}
        </div>
        {itemsToShow < videos.length && (
          <Pagination
            itemsToShow={itemsToShow}
            length={videos.length}
            handleClick={handleLoadMore}
          />
        )}
      </section>
    </>
  )
}
