import YoutubeEmbed from "./YoutubeEmbed"

type Props = {
    title: string
    embedId: string
}

const CardVideo = ({title, embedId }:Props) => {
  return (
    <div className="w-full md:w-1/2 p-3 md:p-4 lg:p-6 flex flex-col">
    <div>
      <div className="flex justify-center">
        <YoutubeEmbed embedId={embedId} />
      </div>
        <div className="flex justify-center md:justify-start">
          <p className="py-4 text-xl hover:grow">
            {title}
          </p>
        </div>
    </div>
  </div>
  )
}

export default CardVideo