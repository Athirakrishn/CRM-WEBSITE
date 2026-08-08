import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Customer Portal and CRM Software for Better Service',
  description:
    'Discover how customer portals and CRM software improve communication, customer access, support, and overall customer experience.',
};

export default function BlogPostPage() {
  const post = blogPosts.find((p) => p.slug === 'article-6');

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white pb-24 pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/blog"
            className="inline-flex items-center text-gray-500 hover:text-brand-orange mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>

          <header className="mb-10 text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-brand-orange bg-orange-50 rounded-full">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-600 text-sm font-medium">
              <span className="font-semibold text-gray-800">
                {post.author}
              </span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </header>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

        </div>
      </div>
    </>
  );
}