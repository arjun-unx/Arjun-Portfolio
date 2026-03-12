interface TechPillProps {
  label: string;
  small?: boolean;
}

export function TechPill({ label, small = false }: TechPillProps) {
  return (
    <span className={`tech-pill${small ? ' small' : ''}`}>{label}</span>
  );
}
