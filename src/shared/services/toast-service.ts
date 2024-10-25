import { ToastListener, ToastProps, ToastType } from "@components/toast";
let toastId = 0;

// Manage the list of current toasts and listeners
let toasts: ToastProps[] = [];
let listeners: ToastListener[] = [];

// Add a listener for updates
const notifyListeners = () => {
    listeners.forEach((listener) => listener(toasts));
};

// Function to add a new toast
export const addToast = (message: string, type: ToastType, duration = 5000) => {
    toastId++;
    const id = `toast-${toastId}`;
    const newToast: ToastProps = { id, message, type, duration };

    // Update the toasts list and notify listeners
    toasts = [...toasts, newToast];
    notifyListeners();
};

// Function to remove a toast by ID
export const removeToast = (id: string) => {
    toasts = toasts.filter((toast) => toast.id !== id);
    notifyListeners();
};

// Function to subscribe to toast updates
export const subscribeToToasts = (listener: ToastListener) => {
    listeners.push(listener);
    return () => {
        listeners = listeners.filter((l) => l !== listener);
    };
};
