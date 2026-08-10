import {
  Boxes,
  Briefcase,
  Cloud,
  Code,
  Container,
  Database,
  FlaskConical,
  GraduationCap,
  Layers,
  Palette,
  Server,
  Sparkles,
  Target,
  TestTubeDiagonal,
  Trophy,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

/**
 * Lucide icons referenced by name from `src/data/*`.
 *
 * Imported individually rather than via lucide's `icons` barrel — that export
 * pulls the entire ~1,600-icon set into the bundle. Add an icon here before
 * using its name in a data file.
 */
const uiIcons: Record<string, LucideIcon> = {
  Boxes,
  Briefcase,
  Cloud,
  Code,
  Container,
  Database,
  FlaskConical,
  GraduationCap,
  Layers,
  Palette,
  Server,
  Sparkles,
  Target,
  TestTubeDiagonal,
  Trophy,
  Users,
  Wrench,
}

/**
 * Looks up an icon by name, falling back to `Sparkles` so an unknown name in a
 * data file renders a visible placeholder instead of crashing.
 */
export function getUiIcon(name?: string, fallback: LucideIcon = Sparkles): LucideIcon {
  if (!name) return fallback
  return uiIcons[name] ?? fallback
}
