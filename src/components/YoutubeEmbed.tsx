import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }:{embedId:any}) => (
  <div className="overflow-hidden relative w-full" style={{ paddingBottom: '56.25%' }}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;