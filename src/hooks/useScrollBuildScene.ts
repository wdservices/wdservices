import { useLayoutEffect, useRef, MutableRefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SceneLine {
  html: string;
  beat: string | null;
}

interface UseScrollBuildSceneArgs {
  wrapRef: React.RefObject<HTMLDivElement>;
  codeBodyRef: React.RefObject<HTMLDivElement>;
  progressFillRef: React.RefObject<HTMLDivElement>;
  beatRefs: MutableRefObject<Record<string, HTMLElement | null>>;
  lines: SceneLine[];
}

/**
 * Ties a pinned section's scroll progress directly to:
 *  1) a character-by-character reveal of `lines` inside codeBodyRef (typewriter, scroll-scrubbed)
 *  2) firing/un-firing named "beats" (elements that fade/scale in as their line completes)
 *  3) a progress rail fill
 * Used by every service page's build scene so the ScrollTrigger/typewriter logic
 * lives in one place instead of being duplicated per page.
 */
export function useScrollBuildScene({
  wrapRef,
  codeBodyRef,
  progressFillRef,
  beatRefs,
  lines,
}: UseScrollBuildSceneArgs) {
  const revealed = useRef<Set<string>>(new Set());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const renderUpTo = (lineIndex: number, partialHTML = '') => {
        let out = '';
        for (let i = 0; i < lineIndex; i++) out += lines[i].html + '\n';
        out += partialHTML + '<span class="tk-caret"></span>';
        if (codeBodyRef.current) codeBodyRef.current.innerHTML = out;
      };

      const fireBeat = (key: string | null) => {
        if (!key || revealed.current.has(key)) return;
        revealed.current.add(key);
        const el = beatRefs.current[key];
        if (el) gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(2)' });
      };

      const resetBeats = (progress: number) => {
        Object.entries(beatRefs.current).forEach(([key, el]) => {
          if (!el) return;
          const lineIdx = lines.findIndex((l) => l.beat === key);
          const beatProgress = lineIdx / lines.length;
          if (progress < beatProgress && revealed.current.has(key)) {
            revealed.current.delete(key);
            gsap.to(el, { opacity: 0, y: 14, scale: 0.9, duration: 0.25 });
          }
        });
      };

      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progressFillRef.current) progressFillRef.current.style.width = `${progress * 100}%`;

          const targetLine = Math.min(lines.length - 1, Math.floor(progress * lines.length));
          const lineProgress = progress * lines.length - targetLine;
          const fullLine = lines[targetLine].html;
          const plainLen = fullLine.replace(/<[^>]+>/g, '').length;
          const charsToShow = Math.floor(plainLen * Math.min(1, lineProgress + 0.15));

          let shown = '';
          let plainCount = 0;
          let inTag = false;
          for (const ch of fullLine) {
            if (ch === '<') inTag = true;
            if (!inTag) plainCount++;
            shown += ch;
            if (ch === '>') inTag = false;
            if (!inTag && plainCount >= charsToShow) break;
          }

          renderUpTo(targetLine, shown);

          for (let i = 0; i <= targetLine; i++) {
            if (i < targetLine || lineProgress > 0.7) fireBeat(lines[i].beat);
          }
          resetBeats(progress);
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [lines]);
}

export const sceneEditorStyles = `
  .tk-key { color: #c792ea; }
  .tk-tag { color: #89ddff; }
  .tk-str { color: #c3e88d; }
  .tk-num { color: #f78c6c; }
  .tk-punc { color: hsl(210,40%,92%); }
  .tk-caret { display:inline-block; width:7px; height:15px; background:hsl(217,91%,60%); vertical-align:-3px; box-shadow:0 0 8px hsl(217,91%,60%); }
`;
