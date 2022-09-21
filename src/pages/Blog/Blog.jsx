import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

import { Text } from "../../components/Text";
import { TextVariants } from "../../constants/VariantsOfComponents";

const Blog = ({ container = true, className }) => {
  const BlogClass = classNames("blog", { container: container }, className);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={BlogClass}>
        <Text
          variant={TextVariants.h1_medium}
          className={container ? "blog-title" : ""}
        >
          Blog
        </Text>
      </div>
    </>
  );
};

export default Blog;
