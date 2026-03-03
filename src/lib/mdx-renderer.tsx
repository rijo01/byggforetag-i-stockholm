import React from "react";

// Convert markdown content to simple HTML string, then render
export function renderContent(markdown: string): React.ReactNode {
  // Process the markdown into HTML
  let html = markdown
    // Headings
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-700 hover:text-blue-900 underline underline-offset-2">$1</a>')
    // Blockquotes (CTA blocks)
    .replace(/^>\s*(.+)$/gm, '<div class="my-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-gray-800">$1</div>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc text-gray-700">$1</li>')
    // Paragraphs: wrap non-tag lines
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      if (trimmed.includes("<li")) return `<ul class="my-4 space-y-1">${trimmed}</ul>`;
      return `<p class="text-gray-700 leading-relaxed mb-4">${trimmed.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return (
    <div
      className="prose-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
