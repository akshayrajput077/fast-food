"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Alert({ userName, close }) {
  const router = useRouter();

  const checkStatus = () => {
    router.push('/record')
  }


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center z-[9999] overflow-hidden">
      <div role="alert" class="rounded-md border border-gray-300 bg-white p-4 shadow-sm h-fit">
        <div class="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-orange-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div class="flex-1">
            <strong class="font-medium text-gray-900">Hey {userName}</strong>

            <p class="mt-0.5 text-sm text-gray-700">You order successfull</p>

            <div class="mt-3 flex items-center gap-2">
              <button
                type="button"
                class="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
                onClick={checkStatus}
              >
                Status
              </button>

            </div>
          </div>

          <button
            class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
            type="button"
            aria-label="Dismiss alert"
            onClick={() => close()}
          >
            <span class="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}