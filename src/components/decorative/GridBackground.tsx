export default function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="dot-grid absolute inset-0 opacity-60" />
    </div>
  );
}
