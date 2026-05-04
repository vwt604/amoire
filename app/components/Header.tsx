import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

const headerStyle: React.CSSProperties = {
  background: '#F4EFE8',
  borderBottom: '1px solid #E0D6CA',
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  padding: '0 2rem',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'Cormorant Garamond, serif',
  fontSize: '1.5rem',
  fontWeight: 400,
  letterSpacing: '0.08em',
  color: '#1C1714',
  textDecoration: 'none',
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#1C1714',
  textDecoration: 'none',
};

const ctaStyle: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#1C1714',
  textDecoration: 'none',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
};

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header style={headerStyle}>
      <NavLink prefetch="intent" to="/" style={{textDecoration: 'none'}}>
        <span style={logoStyle}>{shop?.name || 'Amoire'}</span>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const {close} = useAside();

  if (viewport === 'mobile') {
    return (
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '2rem',
        }}
        role="navigation"
      >
        {AMOIRE_NAV.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            onClick={close}
            style={navLinkStyle}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <nav
      style={{
        display: 'none',
        gap: '2rem',
        marginLeft: '3rem',
        alignItems: 'center',
      }}
      className="header-menu-desktop"
      role="navigation"
    >
      {AMOIRE_NAV.map((item) => (
        <NavLink
          key={item.url}
          to={item.url}
          style={({isActive}) => ({
            ...navLinkStyle,
            color: isActive ? '#3A4A38' : '#1C1714',
          })}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        marginLeft: 'auto',
      }}
      role="navigation"
    >
      <HeaderMenuMobileToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
      style={ctaStyle}
      aria-label="Open menu"
    >
      Menu
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <button
      style={ctaStyle}
      onClick={() => {
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
      aria-label={`Open bag, ${count ?? 0} items`}
    >
      Bag{count !== null && count > 0 ? ` (${count})` : ''}
    </button>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const AMOIRE_NAV = [
  {title: 'Sets', url: '/collections/sets'},
  {title: 'Individual', url: '/collections/all'},
  {title: 'Concierge', url: '/concierge'},
];
