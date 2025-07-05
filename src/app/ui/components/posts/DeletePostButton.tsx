'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ConfirmationPopup from '../common/ConfirmationPopup';

interface DeletePostButtonProps {
  postId: string;
  isIcon?: boolean;
  email: string;
}

export default function DeletePostButton({
  postId,
  isIcon = false,
  email,
}: DeletePostButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/posts?id=${postId}&email=${email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Redirect to posts list after successful deletion
        router.push('/blog/posts');
        router.refresh(); // Refresh the page to update the posts list
      } else {
        throw new Error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      {isIcon ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="z-20 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          title="Delete post"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={() => setShowConfirm(true)}
          className="flex items-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg shadow-md transition-colors duration-200"
        >
          <FaTrash className="w-4 h-4" />
          <span>Delete</span>
        </button>
      )}

      <ConfirmationPopup
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        isLoading={isDeleting}
        loadingText="Deleting..."
        type="danger"
      />
    </>
  );
}
