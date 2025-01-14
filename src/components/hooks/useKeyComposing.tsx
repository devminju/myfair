import { useState } from "react";

/** 한글 조합 상태를 확인하는 커스텀 훅 */
export default function useKeyComposing() {
  const [isComposing, setIsComposing] = useState(false);

  const keyComposingEvents = {
    onCompositionStart: () => setIsComposing(true),
    onCompositionEnd: () => setIsComposing(false),
  };

  return { isComposing, keyComposingEvents };
}
