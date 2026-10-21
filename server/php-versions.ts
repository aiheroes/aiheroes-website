// PHP branches and their support (php.net/supported-versions.php, checked 2026-10-21), plus the
// state of the PHP2Shell fix (CVE-2026-109618 and CVE-2026-109619) for the website check. PHP
// released the fix on 2026-10-21 as 8.5.12, 8.4.27, 8.3.36 and 8.2.35 (php.net); PHP 8.1 and
// older get none (Sansec).

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

/** First patch release with the fix per branch (php.net, 2026-10-21). */
const FIXED: Record<string, number> = { '8.5': 12, '8.4': 27, '8.3': 36, '8.2': 35 };

export type PhpPhase = 'active' | 'security' | 'eol' | 'unknown';

export interface PhpStatus {
  branch: string;
  phase: PhpPhase;
  activeUntil: string | null;
  securityUntil: string | null;
  /** The branch gets the PHP2Shell fix. */
  fix: boolean;
  /** The first version of the branch with the fix, such as "8.3.36". */
  fixedIn: string | null;
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

  const fix = branch in FIXED;
  const patched = fix && Number.isFinite(patch) && !distro ? patch >= FIXED[branch] : null;
  return {
    branch,
    phase,
    activeUntil: row?.activeUntil ?? null,
    securityUntil: row?.securityUntil ?? null,
    fix,
    fixedIn: fix ? `${branch}.${FIXED[branch]}` : null,
    patched,
  };
}
