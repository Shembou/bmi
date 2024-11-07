import { IVideoSection } from './IVideoSection'

export default function VideoSection({ videos }: IVideoSection) {
  const formatYouTubeURL = (url: string) => {
    if (url.includes('watch?v=')) {
      return url.replace('watch?v=', 'embed/')
    }
    return url
  }

  return (
    <section className={'grid gap-9 grid-cols-1 xl:grid-cols-3 py-24 sm:grid-cols-2'}>
      {videos &&
        videos.map(({ description, title, url }, index) => (
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
    </section>
  )
}
