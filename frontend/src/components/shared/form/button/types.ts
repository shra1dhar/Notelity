export interface ButtonProps {
  disabled?: boolean;
  [x: string]: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
