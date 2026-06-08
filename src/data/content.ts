// Re-export the existing CONTENT data so Astro code can import it via `@/data/content`
// while the legacy React pages still reference the original `constants.ts` during the
// migration. At cutover the real data file moves here and the legacy tree is deleted.
export { CONTENT } from '../../constants';
