// PHP branches and their support (php.net/supported-versions.php, checked 2026-10-21), plus the
// state of the PHP2Shell fix (CVE-2026-109618 and CVE-2026-109619) for the website check. The
// fix is a security release for the supported branches, due 2026-10-21 at 14:00 UTC; PHP 8.1 and
// older get none (Sansec). Until php.net publishes the fixed versions, FIXED stays empty: a
// version at or below the last release before the fix is certainly unpatched, anything newer
// is left open instead of guessed.

export interface PhpBranch {
  branch: string;
  activeUntil: string;
  securityUntil: string;
}

export const PHP_BRANCHES: PhpBranch[] = [
  { branch: '8.5', activeUntil: '2027-12-31', securityUntil: '2029-12-31' },
  { branch: '8.4', activeUntil: '2026-12-31', securityUntil: '2028-12-31' },
  { branch: '8.3', activeUntil: '2025-12-31', securityUntil: '2027-12-31' },
  { branch: '8.2', activeUntil: '2024-12-31', securityUntil: '2026-12-31' },
];

/** The releases of 2026-09-24, the last ones before the fix. */
const LAST_BEFORE_FIX: Record<string, number> = { '8.5': 11, '8.4': 26, '8.3': 35, '8.2': 34 };

/** First fixed patch number per branch, filled in once php.net publishes the release. */
const FIXED: Record<string, number> = {};

export type PhpPhase = 'active' | 'security' | 'eol' | 'unknown';

export interface PhpStatus {
  branch: string;
  phase: PhpPhase;
  activeUntil: string | null;
  securityUntil: string | null;
  /** The branch gets the PHP2Shell fix. */
  fix: boolean;
  /** The visible version has the fix: true, false, or null when it cannot be told from outside. */
  patched: boolean | null;
}

const endOf = (day: string) => new Date(`${day}T23:59:59Z`);

/**
 * Support and fix status of a version string such as "8.3.35". `distro` marks a Linux package
 * ("8.1.2-1ubuntu2.14"): distributions backport fixes under their own numbers, so the patch
 * number says nothing about the fix.
 */
export function phpStatus(version: string, distro = false, now = new Date()): PhpStatus {
  const [major, minor, patch] = version.split('.').map((n) => Number.parseInt(n, 10));
  const branch = `${major}.${minor}`;
  const row = PHP_BRANCHES.find((b) => b.branch === branch);
  let phase: PhpPhase;
  if (row) phase = now <= endOf(row.activeUntil) ? 'active' : now <= endOf(row.securityUntil) ? 'security' : 'eol';
  else if (major < 8 || (major === 8 && minor <= 1)) phase = 'eol';
  else phase = 'unknown';

  const fix = branch in LAST_BEFORE_FIX;
  let patched: boolean | null = null;
  if (fix && Number.isFinite(patch) && !distro) {
    if (branch in FIXED) patched = patch >= FIXED[branch];
    else if (patch <= LAST_BEFORE_FIX[branch]) patched = false;
  }
  return { branch, phase, activeUntil: row?.activeUntil ?? null, securityUntil: row?.securityUntil ?? null, fix, patched };
}
