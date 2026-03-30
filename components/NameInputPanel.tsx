import { SubmitNameButton } from "@/components/SubmitNameButton";

type NameInputPanelProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isPending: boolean;
  isConnected: boolean;
  feedback: {
    title: string;
    description: string;
  };
};

export function NameInputPanel({
  value,
  onChange,
  onSubmit,
  isPending,
  isConnected,
  feedback,
}: NameInputPanelProps) {
  return (
    <section className="input-panel">
      <div className="section-heading">
        <span className="eyebrow">Name candidate</span>
        <span className="mini-label">Max 32 chars</span>
      </div>
      <div className="name-field">
        <label htmlFor="candidate-name">Candidate</label>
        <input
          id="candidate-name"
          maxLength={32}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Type one strong name"
          value={value}
        />
      </div>
      <p className="field-hint">Short, memorable, and easy to say out loud.</p>
      <SubmitNameButton disabled={!isConnected || value.trim().length === 0} isPending={isPending} onClick={onSubmit} />
      <div className="feedback-box">
        <strong>{feedback.title}</strong>
        <p>{feedback.description}</p>
      </div>
    </section>
  );
}
