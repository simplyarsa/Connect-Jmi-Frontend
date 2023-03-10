import "./post.css";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from 'moment';

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false);


  return (
    <div className="post">
      <div className="userInfo">
        <div className="details">
          <span className="name">{post.name}</span>
          <span className="date">{moment(post.createdat).fromNow()}</span>
        </div>
        <div className="content">
          <p>{post.desc}</p>
        </div>
        <div className="info">
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
