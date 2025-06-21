import React from "react";
import { User } from "../../../types";

type Props = {
  userProfile: User | undefined;
};

const Post = ({ userProfile }: Props) => {
  // console.log(userProfile);

  return <div>Post</div>;
};

export default Post;
