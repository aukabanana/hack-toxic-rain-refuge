import { useEffect, useState, type FormEvent } from "react";

interface CreateCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (communityName: string) => void;
}

function CreateCommunityModal({
  isOpen,
  onClose,
  onCreate,
}: CreateCommunityModalProps) {
  const [communityName, setCommunityName] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedCommunityName = communityName.trim();

    if (!normalizedCommunityName) return;

    onCreate(normalizedCommunityName);
    setCommunityName("");
  }

  function handleClose() {
    setCommunityName("");
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 z-1000 flex items-center justify-center bg-[rgba(var(--color-dark-rgb),0.15)] px-4"
      role="presentation"
      onMouseDown={handleClose}
    >
      <section
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-community-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2
          id="create-community-title"
          className="text-lg font-bold text-(--color-dark)"
        >
          Create Community
        </h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          <label
            htmlFor="community-name"
            className="block text-sm font-bold text-(--color-dark)"
          >
            Community name
          </label>

          <input
            id="community-name"
            type="text"
            value={communityName}
            onChange={(event) => setCommunityName(event.target.value)}
            placeholder="Enter community name"
            autoFocus
            className="mt-4 w-full rounded-xl border border-black/40 bg-white px-5 py-3 text-base text-(--color-dark) outline-none transition placeholder:text-black/45 focus:border-(--color-navy) focus:ring-4 focus:ring-(--color-navy)/15"
          />

          <div className="mt-10 flex justify-end gap-5">
            <button
              type="button"
              onClick={handleClose}
              className="min-w-28 rounded-xl border border-(--color-navy) bg-white px-5 py-2.5 text-sm font-bold text-(--color-navy) transition hover:bg-black/5 focus:outline-none focus:ring-4 focus:ring-(--color-navy)/15"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!communityName.trim()}
              className="min-w-28 rounded-xl bg-(--color-navy) px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-(--color-navy)/25 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateCommunityModal;