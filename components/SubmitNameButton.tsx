type SubmitNameButtonProps = {
  onClick: () => void;
  isPending: boolean;
  disabled?: boolean;
};

export function SubmitNameButton({ onClick, isPending, disabled }: SubmitNameButtonProps) {
  return (
    <button className="primary-button" disabled={disabled || isPending} onClick={onClick} type="button">
      {isPending ? "Submitting..." : "Submit name"}
    </button>
  );
}
