import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, User, Tag } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${post.title} | DataHelp.eu Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://datahelp.eu/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
      </Helmet>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
        />
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center space-x-2">
              <Tag className="h-5 w-5 text-accent" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}