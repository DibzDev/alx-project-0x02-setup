export interface CardProps {
  title: string;
  content: string;
  className?: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export interface PostData {
  title: string;
  content: string;
}