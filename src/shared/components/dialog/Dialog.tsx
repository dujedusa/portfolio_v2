import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Icon } from "@components/icon";

import { DialogProps } from "./index";
import "./dialog.scss";

const Dialog: FunctionComponent<DialogProps> = (props) => {
  const { isOpen, children, hasCloseButton, onClose } = props;
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(isOpen);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }

    setDialogOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setDialogOpen(isOpen);
    const body = document.getElementById("body");

    (body as HTMLBodyElement).style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isDialogOpen) {
      dialog.close();
      return;
    }

    dialog.showModal();
  }, [isDialogOpen]);

  return (
    <dialog className="dialog" ref={dialogRef} onKeyDown={handleKeyDown}>
      <div className="dialog__header">
        <h1 className="dialog__title">Attributions</h1>
        {hasCloseButton && (
          <button className="dialog__close-button" onClick={handleCloseModal}>
            <Icon icon="xmark-solid" size={24} />
          </button>
        )}
      </div>
      {children}
    </dialog>
  );
};

export default Dialog;
