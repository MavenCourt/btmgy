interface MailDraftOptions {
  to: string;
  subject: string;
  body: string;
}

export const openMailDraft = ({ to, subject, body }: MailDraftOptions) => {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
};
