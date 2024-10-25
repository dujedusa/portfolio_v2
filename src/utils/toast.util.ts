import { ToastType } from "@components/toast";
import { TOAST_ERROR, TOAST_SUCCESS } from "@shared/constants";
import { addToast } from "@shared/services";

export const showSuccessToast = () => {
    addToast(TOAST_SUCCESS.message, TOAST_SUCCESS.type as ToastType);
};

export const showErrorToast = () => {
    addToast(TOAST_ERROR.message, TOAST_ERROR.type as ToastType);
};
