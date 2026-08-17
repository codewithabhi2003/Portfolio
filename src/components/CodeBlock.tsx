import { ReactNode } from "react";

export interface CodeLine {
  indent?: number;
  content: ReactNode;
}

interface CodeBlockProps {
  filename: string;
  lines: CodeLine[];
  width?: string;
  cursor?: boolean;
  className?: string;
}

const CodeBlock = ({
  filename,
  lines,
  width = "100%",
  cursor = false,
  className = "",
}: CodeBlockProps) => {
  return (
    <div className={`code-block min-w-0 max-w-full ${className}`} style={{ width }}>
      <div className="code-block-bar">
        <span className="code-dot bg-[#ff5f56]" />
        <span className="code-dot bg-[#ffbd2e]" />
        <span className="code-dot bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
          {filename}
        </span>
      </div>
      <div className="px-4 py-4 font-mono text-[12.5px] leading-[1.7] overflow-x-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            style={{ paddingLeft: (line.indent ?? 0) * 14 }}
            className="whitespace-pre"
          >
            {line.content}
            {cursor && i === lines.length - 1 && (
              <span className="inline-block w-[6px] h-[13px] bg-primary ml-1 align-middle animate-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;
