'use client';

import { useState } from 'react';
import { ClipboardDocumentIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [text, setText] = useState('');
  const [cleaned, setCleaned] = useState(false);

  const cleanText = () => {
    // Replace single newlines with space, keep double newlines (paragraphs)
    // The regex looks for a newline that is NOT preceded by a newline AND NOT followed by a newline
    const newText = text.replace(/([^\n])\n(?!\n)/g, '$1 ');
    setText(newText);
    setCleaned(true);
    setTimeout(() => setCleaned(false), 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    // Optional: Show toast or feedback
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-950 text-gray-100">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            AI Text Cleaner
          </h1>
          <p className="text-lg text-gray-400">
            Clean messy PDF text for your AI prompts. Removes unwanted line breaks, keeps paragraphs.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full h-96 p-6 bg-gray-900 border border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-lg leading-relaxed shadow-2xl transition-all placeholder-gray-600"
              spellCheck="false"
            />

            <div className="absolute bottom-4 right-4 flex space-x-3">
              <button
                onClick={cleanText}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-900/20"
              >
                <ArrowPathIcon className="w-5 h-5 mr-2" />
                Clean Text
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors border border-gray-700"
              >
                <ClipboardDocumentIcon className="w-5 h-5 mr-2" />
                Copy
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Privacy focused: Your text never leaves your browser.</p>
        </div>
      </div>
    </main>
  );
}
