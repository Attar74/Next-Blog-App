'use client';

import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';
interface CopyLinkButtonProps {
  postId: string;
}

export default function CopyLinkButton({ postId }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}/blog/post/${postId}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <button
      onClick={handleCopyLink}
      className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-800 hover:shadow-lg transition-all duration-200 hover:scale-105 min-w-32"
      title="Copy link to clipboard"
    >
      {copied ? (
        <div className="flex items-center gap-2 justify-center">
          <FaCheck className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            Copied!
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2 justify-center">
          <FaCopy className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Copy Link
          </span>
        </div>
      )}
    </button>
  );
}
