import React, { useEffect, useRef } from 'react';

type Props = {
  show: boolean;
  className?: string | undefined;
  children: React.ReactNode;
  onHide: () => void;
};

export function ModalDialog({ show, className, children, onHide }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener('close', onHide);

    if (show) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }

    return () => {
      dialog?.removeEventListener('close', onHide);
    };
  }, [show, onHide]);

  return (
    <dialog className={className} ref={dialogRef}>
      {children}
    </dialog>
  );
}
