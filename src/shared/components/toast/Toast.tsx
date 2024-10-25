import { FunctionComponent, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Icon } from "@components/icon";
import { removeToast } from "@shared/services";

import { TOAST_ICONS_MAP, ToastProps } from "./index";
import "./toast.scss";

const Toast: FunctionComponent<ToastProps> = (props) => {
  const { id, message, type, duration, onClose } = props;
  const [isClosing, setClosing] = useState(false);

  const getCssClassMap = () =>
    classNames("toast", `toast--${type}`, {
      "toast--enter": !isClosing,
      "toast--exit": isClosing,
    });

  const handleCloseToast = useCallback(() => {
    setClosing(true);

    setTimeout(() => {
      removeToast(id);
      if (onClose) {
        onClose();
      }
    }, 300);
  }, [id, onClose]);

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(handleCloseToast, duration);
    return () => clearTimeout(timer);
  }, [duration, handleCloseToast]);

  return (
    <div
      className={getCssClassMap()}
      aria-hidden={!isClosing}
      id={id}
      role="alert"
    >
      <div className="toast-message">
        <Icon className="toast-icon" icon={TOAST_ICONS_MAP[type]} size={16} />
        <p>{message}</p>
      </div>
      <button className="toast__close-button" onClick={handleCloseToast}>
        <Icon icon="xmark-solid" size={16} />
      </button>
    </div>
  );
};

export default Toast;
