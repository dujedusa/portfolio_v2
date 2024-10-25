import { useState, useEffect, FunctionComponent } from "react";
import { Toast, ToastProps } from "@components/toast";
import { subscribeToToasts } from "@shared/services";

import "./toast-container.scss";

const ToastContainer: FunctionComponent = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToToasts((newToasts: ToastProps[]) => {
      setToasts(newToasts);
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          id={toast.id}
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={toast.onClose}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
