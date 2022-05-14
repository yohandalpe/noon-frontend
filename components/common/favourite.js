const Favourite = (props) => {
  let classes = "fa fa-2x fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer", color: props.liked ? "rgb(255,0,0)" : "" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Favourite;
