const Like = (props) => {
  let classes = "fa fa-2x fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer", color: props.liked ? "red" : "" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
