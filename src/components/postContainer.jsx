import { useState } from "react";

import CategoryBar from "./categoryBar";
import PostCard from "./postCard";

const activeTab = {
  home: "HOME",
  tech: "TECH",
  quran: "QURAN",
  workout: "WORKOUT",
};
const allPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const PostContainer = () => {
  const [isList, setIsList] = useState(true);

  const [posts, setPosts] = useState(allPosts)

  const [isActive, setIsActive] = useState(activeTab.home);

  const toggleView = () => {
    setIsList(!isList);
  };
  const setActiveTab = (tab) => {
	setPosts(allPosts)
    setIsActive(tab);
  };

  return (
    <>
      <CategoryBar
        isActive={isActive}
        isList={isList}
        toggleView={toggleView}
        setActiveTab={setActiveTab}
      ></CategoryBar>

      <div className="flex flex-wrap">
        {posts.map((post, i) => {
          return (
            <div className={isList ? "w-[100]" : "w-[50%]"} key={i}>
              <div className="mx-3 my-4">
                <PostCard></PostCard>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostContainer;
