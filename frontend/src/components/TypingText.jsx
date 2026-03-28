import { useEffect, useState } from "react";

export default function TypingText({ texts = [], speed = 100, pause = 1500 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex] || "";
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, speed);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}