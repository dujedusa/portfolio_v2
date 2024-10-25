export const capitalize = (word: string): string => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

export const setBodyScroll = (preventScroll: boolean) => {
    const body = document.getElementById("body") as HTMLBodyElement;

    body.style.overflow = preventScroll ? "hidden" : "unset";
};

export const preventBodyPointerEvents = (preventPointerEvents: boolean) => {
    const body = document.getElementById("body") as HTMLBodyElement;

    body.style.pointerEvents = preventPointerEvents ? "none" : "unset";
};
