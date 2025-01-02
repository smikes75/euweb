import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-primary mb-2 hover:text-accent transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4 text-accent" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-sm text-accent bg-accent/10 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}