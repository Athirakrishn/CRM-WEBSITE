import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPostPage() {
  const post = blogPosts.find(p => p.slug === "article-3");

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Hero Image Section */}
        <div className="w-full h-[50vh] relative">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-widest text-white bg-brand-orange rounded-full">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/90 font-medium">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-brand-orange mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>
            
            <div 
              className="blog-content text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
