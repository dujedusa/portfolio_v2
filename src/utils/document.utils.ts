export const downloadDocument = (href: string, name: string): void => {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = href;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
};
