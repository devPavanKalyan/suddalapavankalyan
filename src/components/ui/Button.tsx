import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
};

export default function Button({ children, href }: Props) {
  if (href) {
    return (
      <a
        href={href}
        className="inline-block px-5 py-2 bg-accent text-black rounded font-medium"
      >
        {children}
      </a>
    );
  }

  return (
    <button className="px-5 py-2 bg-accent text-black rounded font-medium">
      {children}
    </button>
  );
}
