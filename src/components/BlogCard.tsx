import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }:any) => {

  return (
    <Link className="blog_card" href={`/blog/${blog?.id}`}>
        <div className="blog-img">
          <Image
            src={`http://dev.littlebigsocial.com/file-uploads?key=${blog?.image}`}
            alt="blog top"
            className="blog_card_image"
            height={200}
            width={200}
          />
        </div>
        <div className="blog-text-content">
          <h3>{blog?.metaTitle}</h3>
          <h5>{blog?.category ? blog?.category.split(',').join(' / ') : ''}</h5>
          <p>{blog?.metaDesc}</p>
          <p>{blog?.publishDate}</p>
        </div>
      </Link>
  );
};

export default BlogCard;
