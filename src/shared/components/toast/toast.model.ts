export type ToastType = 'success' | 'error';
export type ToastIconMap = Record<ToastType, string>;

export type ToastProps = {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
    onClose?: () => void;
};

export type ToastListener = (toasts: ToastProps[]) => void;
