const Card = ({ key, className = "", img = { src, alt, style }, contentLeft = <></>, contentRight = <></> }) => {
  const { src, alt, style = "" } = img;
  return (
    <div key={key} className={className}>
      <div className="gap-1 inline-flex">
        <img className={style} src={src} alt={alt} />
        <div className="content-left">{contentLeft}</div>
      </div>
      <div className="content-right">{contentRight}</div>
    </div>
  );
};

export default Card;
