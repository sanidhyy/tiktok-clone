const Spinner = ({ className = "size-4" }: { className?: string }) => {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin ${className}`}
    />
  );
};

export default Spinner;
