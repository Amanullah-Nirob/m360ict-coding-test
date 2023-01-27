function MediaLink({ link }: any) {
  return (
    <div className="media_link">
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        style={{ color: link.url ? "black" : "#d1cece" }}
      >
        {link.Icon}
        {link.title}
      </a>
    </div>
  );
}

export default MediaLink;
