'use client';

import { useEffect, useState } from 'react';

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  loadingText?: string;
  type?: 'danger' | 'warning' | 'info';
}

export default function ConfirmationPopup({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isLoading = false,
  loadingText = 'Loading...',
  type = 'danger',
}: ConfirmationPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle transition states
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to ensure the component renders with closed state first
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close popup when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Don't render anything if not visible
  if (!isVisible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'danger':
        return {
          icon: (
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          ),
          confirmButton:
            'bg-red-600 hover:bg-red-700 focus:ring-red-500 hover:shadow-lg',
          iconBg: 'bg-red-50',
          iconBorder: 'border-red-200',
        };
      case 'warning':
        return {
          icon: (
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          ),
          confirmButton:
            'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 hover:shadow-lg',
          iconBg: 'bg-yellow-50',
          iconBorder: 'border-yellow-200',
        };
      case 'info':
        return {
          icon: (
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          confirmButton:
            'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 hover:shadow-lg',
          iconBg: 'bg-blue-50',
          iconBorder: 'border-blue-200',
        };
      default:
        return {
          icon: (
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          ),
          confirmButton:
            'bg-red-600 hover:bg-red-700 focus:ring-red-500 hover:shadow-lg',
          iconBg: 'bg-red-50',
          iconBorder: 'border-red-200',
        };
    }
  };

  const typeStyles = getTypeStyles();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        {/* Enhanced Backdrop with blur effect */}
        <div
          className={`fixed inset-0 bg-gray-500/75 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? 'bg-opacity-75' : 'bg-opacity-0'
          }`}
          onClick={handleBackdropClick}
        />

        {/* Enhanced Modal with Post.tsx inspired styling */}
        <div
          className={`relative transform overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-100 text-left shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out sm:my-8 sm:w-full sm:max-w-lg ${
            isTransitioning
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <div className="px-6 pb-6 pt-6 sm:p-6">
            <div className="sm:flex sm:items-start">
              {/* Enhanced Icon Container */}
              <div
                className={`mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${typeStyles.iconBg} border ${typeStyles.iconBorder} sm:mx-0 sm:h-12 sm:w-12 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {typeStyles.icon}
              </div>
              <div className="mt-4 text-center sm:ml-5 sm:mt-0 sm:text-left">
                {/* Enhanced Title */}
                <h3 className="text-xl font-bold leading-6 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {title}
                </h3>
                <div className="mt-3">
                  {/* Enhanced Message */}
                  <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Button Container */}
          <div className="bg-gray-50/80 backdrop-blur-sm px-6 py-4 sm:flex sm:flex-row-reverse sm:px-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className={`inline-flex w-full justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 ${typeStyles.confirmButton}`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="w-4 h-4 mr-2 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {loadingText}
                </>
              ) : (
                confirmText
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="mt-3 inline-flex w-full justify-center rounded-xl backdrop-blur-sm px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 hover:shadow-md focus:outline-offset-0 sm:mt-0 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
