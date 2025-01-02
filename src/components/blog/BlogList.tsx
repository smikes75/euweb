import React from 'react';
import { BlogCard } from './BlogCard';
import { blogPosts } from '../../data/blogPosts';

export function BlogList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}