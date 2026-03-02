import React from "react";

// Simple markdown-to-HTML renderer for MDX content
// Handles: headings, paragraphs, bold, links, blockquotes, lists
export function renderContent(markdown: string): React.ReactNode[] {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Empty line
    if (!line) {
      i++;
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-display font-bold text-brand-900 mt-10 mb-4">
          {processInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-display font-semibold text-brand-800 mt-8 mb-3">
          {processInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote (CTA blocks)
    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().slice(1).trim());
        i++;
      }
      elements.push(
        <div key={key++} className="my-8 p-6 bg-accent-50 border-l-4 border-accent-500 rounded-r-lg">
          {quoteLines.map((ql, qi) => (
            <p key={qi} className="text-brand-800 font-medium">
              {processInline(ql)}
            </p>
          ))}
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 ml-6 space-y-2 list-disc text-gray-700">
          {items.map((item, li) => (
            <li key={li}>{processInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-4 ml-6 space-y-2 list-decimal text-gray-700">
          {items.map((item, li) => (
            <li key={li}>{processInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Regular paragraph
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() && !lines[i].trim().startsWith("#") && !lines[i].trim().startsWith(">") && !lines[i].trim().startsWith("- ") && !lines[i].trim().startsWith("* ") && !/^\d+\.\s/.test(lines[i].trim())) {
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-4">
          {processInline(paraLines.join(" "))}
        </p>
      );
    }
  }

  return elements;
}

// Process inline markdown: **bold**, [link](url)
function processInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let partKey = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Link
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

    // Find first match
    const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;
    const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;

    let firstIdx = -1;
    let firstType: "bold" | "link" | null = null;

    if (boldIdx >= 0 && (linkIdx < 0 || boldIdx < linkIdx)) {
      firstIdx = boldIdx;
      firstType = "bold";
    } else if (linkIdx >= 0) {
      firstIdx = linkIdx;
      firstType = "link";
    }

    if (firstIdx < 0) {
      parts.push(remaining);
      break;
    }

    // Text before match
    if (firstIdx > 0) {
      parts.push(remaining.slice(0, firstIdx));
    }

    if (firstType === "bold" && boldMatch) {
      parts.push(
        <strong key={partKey++} className="font-semibold text-brand-900">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(firstIdx + boldMatch[0].length);
    } else if (firstType === "link" && linkMatch) {
      parts.push(
        <a key={partKey++} href={linkMatch[2]} className="text-brand-600 hover:text-brand-800 underline underline-offset-2">
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(firstIdx + linkMatch[0].length);
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
