// import formatDateToPolishLocaleString from '@/utils/formatDateToPolishLocaleString'
import { INews } from './INewsSection'

export default function NewsTiles({ news }: INews) {
  console.log(news)
  return (
    <div>
      {/* {news &&
        news.map(({ hero, slug, _createdAt }, index) => (
          <div>
            <div>{formatDateToPolishLocaleString(_createdAt)}</div>
          </div>
        ))} */}
    </div>
  )
}
