import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isTop) {
      // Scroll xuống giữa/trang tiếp theo
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      // Scroll lên đầu
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50"
    >
      <img
        src="/images/img_component_scroll.svg"
        className="w-[48px] h-[48px]"
        alt="Scroll"
      />
    </button>
  );
}
