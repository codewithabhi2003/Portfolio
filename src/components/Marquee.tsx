const items = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.io",
  "Groq / LLaMA 3.1",
  "Google Gemini",
  "JWT Auth",
  "Razorpay",
  "Docker",
  "AWS",
  "GitHub Actions",
];

const Marquee = () => {
  const loop = [...items, ...items];

  return (
    <div className="relative border-y border-border overflow-hidden py-5 bg-secondary/20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center">
            <span className="font-mono text-sm text-muted-foreground px-6 whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
