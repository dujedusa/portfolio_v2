import { ReactNode } from "react";

export type DialogProps = {
    isOpen: boolean;
    children: ReactNode;
    hasCloseButton?: boolean;
    onClose?: () => void;
};
