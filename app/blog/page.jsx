"use client";
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Latest <span className="text-brand-orange">Insights & News</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay up to date with the latest industry trends, product updates, and expert tips from the LumeoCRM team.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {blogPosts.length > 0 && (
          <Link href={`/blog/${blogPosts[0].slug}`} className="mb-16 rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 group cursor-pointer border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
              <img 
                src={blogPosts[0].imageUrl} 
                alt={blogPosts[0].title} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange bg-orange-50 rounded-full">
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors duration-200">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center text-brand-orange font-medium">
                Read Article
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        )}

        {/* Grid for other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col cursor-pointer hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-brand-orange font-medium mt-auto text-sm">
                  Read Article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
    </>
  );
}
