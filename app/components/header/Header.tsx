import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <Image
        priority
        src="/images/logo.png"
        height={32}
        width={32}
        alt="Logo"
      />
    </div>
  );
}
