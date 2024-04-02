"use client";
import Image from "next/image";
import React, { useState, useEffect, use } from "react";
import Instance from "@/utils/axios";
import BlogCard from "@/components/BlogCard";
import LBSStepCard from "@/components/LBSStepCard";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import parser from "html-react-parser";
import { howItWorksProcedures, categories } from "@/assets/marketSelectionData";

export default function BlogsPage({blogs}:any) {

  const [blogsData, setBlogsData] = useState<any>(blogs);
  // const getBlogs = async () => {
  //   let searchQuery = `offset=${0}&limit=${10}`;
  //   try {
  //     const { data, status } = await Instance.get(`/blogs?${searchQuery}`);
  //     console.log(data,"data")
  //     if (status !== 200) throw Error;
  //     return data || [];
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // useEffect(() => {
  //   (async () => {
  //     const data = await getBlogs();
  //     setBlogsData(data.data);
  //   })();
  // }, []);

  return (
    <main>
        <>
          <section className="blog-banner blog-align">
            <Image
              className="banner-img"
              src="/blog-bg.jpg"
              height={1900}
              width={1900}
              alt={""}
            />
            <div className="blog-content">
              <h2 className="text-shadow ">Little big ideas</h2>
              <p>
                In our blog of Little Big Ideas, you can be sure to find tips
                for your next DIY project or hobby, insights into reducing
                waste, guides on creating opportunities in our neighbourhoods,
                plus stories and interviews from our community of sharers and
                carers.
              </p>
            </div>
          </section>

          <section className="blog-list">
            <div className="container">
              <div className="row">
                {blogsData.length > 0 &&
                  blogsData.map((blog: { id: string }) => (
                    <div className="col-md-4" key={blog.id}>
                      <BlogCard
                        blog={blog}
                        key={blog.id}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
    </main>
  );
}
