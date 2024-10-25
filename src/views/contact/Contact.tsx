import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { Overlay } from "@components/overlay";
import { Spinner } from "@components/spinner";
import { sendEmail, showErrorToast, showSuccessToast } from "@utils";

import { CONTACT_FORM_VALIDATION, CONTACT_TEXT, ContactForm } from "./index";
import "./contact.scss";

const Contact: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const showLoader = () => setLoading(true);

  const hideLoader = () => setLoading(false);

  const onSuccess = () => {
    hideLoader();
    reset();
    showSuccessToast();
  };

  const onError = () => {
    hideLoader();
    showErrorToast();
  };

  const onSubmit = handleSubmit((formData: ContactForm) => {
    showLoader();

    sendEmail(formData, undefined, onSuccess, onError);
  });

  return (
    <section className="contact">
      <div className="contact__wrapper">
        <div className="contact__text">
          <h1 className="contact__title">{CONTACT_TEXT.title}</h1>
          <span>{CONTACT_TEXT.firstSubtitle}</span>
          <span>{CONTACT_TEXT.secondSubtitle}</span>
        </div>
        <form className="contact__form" onSubmit={onSubmit}>
          <div className="contact__form--row">
            <Input
              type="text"
              label="Name"
              placeholder="Your full name"
              name="fullName"
              register={register}
              rules={CONTACT_FORM_VALIDATION.fullName}
              error={errors.fullName}
              value={watch("fullName")}
              resetField={resetField}
            />
            <Input
              type="text"
              label="Email"
              placeholder="Your email"
              register={register}
              name="email"
              rules={CONTACT_FORM_VALIDATION.email}
              error={errors.email}
              value={watch("email")}
              resetField={resetField}
            />
          </div>
          <Input
            type="text"
            label="Subject"
            placeholder="Enter subject"
            register={register}
            name="subject"
            rules={CONTACT_FORM_VALIDATION.subject}
            error={errors.subject}
            value={watch("subject")}
            resetField={resetField}
          />
          <Input
            type="textarea"
            label="Message"
            placeholder="Enter message"
            register={register}
            name="message"
            rules={CONTACT_FORM_VALIDATION.message}
            error={errors.message}
            value={watch("message")}
            resetField={resetField}
          />
          <Button label="Send" />
        </form>
      </div>
      <Overlay visible={isLoading}>
        <Spinner />
      </Overlay>
    </section>
  );
};

export default Contact;
