import { FunctionComponent, useState } from "react";
import { Icon } from "@components/icon";
import { Divider } from "@components/divider";
import { Dialog } from "@components/dialog";
import { Attribution } from "@views/attribution";

import { FOOTER_LINKS, FOOTER_TEXT, getCopyrightText } from "./index";
import "./footer.scss";

const Footer: FunctionComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer__text">
        <span>{FOOTER_TEXT.socialMedia}</span>
        <span>{FOOTER_TEXT.email}</span>
      </div>
      <div className="footer__icons">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target={link.target}
            rel={link.rel}
            title={link.title}
            tabIndex={0}
          >
            <Icon
              icon={link.icon?.name as string}
              size={link.icon?.size}
              color={link.icon?.color}
            />
          </a>
        ))}
      </div>
      <button
        className="footer__attributions"
        tabIndex={0}
        onClick={handleModalOpen}
      >
        {FOOTER_TEXT.attributions}
      </button>
      <Dialog
        isOpen={isModalOpen}
        hasCloseButton={true}
        onClose={handleModalClose}
      >
        <Attribution />
      </Dialog>
      <Divider />
      <p className="footer__copyright">{getCopyrightText()}</p>
    </footer>
  );
};

export default Footer;
