'use client';
import { useRouter } from 'next/navigation';
import HeaderFigma from '@/components/HeaderFigma';

export default function HeaderMount({ currentPage = 'home' }: { currentPage?: string }) {
  const router = useRouter();
  return (
    <HeaderFigma
      currentPage={currentPage}
      onNavigate={(page) => {
        // sayfa anahtarlarını route'a çevir
        const map: Record<string,string> = {
          home: '/',
          angebote: '/angebote',
          'internet-tv': '/internet-tv',
          mobilfunk: '/mobilfunk',
          'strom-gas': '/strom-gas',
          kredite: '/kredite',
          berater: '/berater',
          'warum-wir': '/warum-wir'
        };
        router.push(map[page] ?? '/');
      }}
    />
  );
}
