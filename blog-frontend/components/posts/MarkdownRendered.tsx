"use client";

import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css"; // o el tema que prefieras

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = memo(({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        // Personaliza elementos HTML
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-bold mb-3 mt-4">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="text-gray-700">{children}</li>,
        code: ({ className, children }) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ) : (
            <code className={className}>{children}</code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
            {children}
          </pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">
            {children}
          </blockquote>
        ),
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt || ""}
            className="rounded-lg my-4 max-w-full h-auto"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
});
