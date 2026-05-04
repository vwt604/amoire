const BUNDLES = [
  {
    number: '01',
    name: 'The First Night Away',
    occasion: 'Evening · Arrival · First night',
    copy: 'A new environment asks something of your skin before it gives anything back. This set does the work of arrival — calming, settling, preparing you for wherever you\'ve landed.',
    price: '$195',
    includes: 'Calm Serum · Balance Lotion · Barrier Serum',
  },
  {
    number: '02',
    name: 'The Long-Haul Recovery Set',
    occasion: 'Evening · Repair · After a long journey',
    copy: 'Recycled air. Lost hours. A body that has crossed too many timezones too many times. This set is for the nights when your skin needs more than maintenance.',
    price: '$215',
    includes: 'Replenish Serum · Restore Oil · Shield Balm',
  },
  {
    number: '03',
    name: 'The Morning After',
    occasion: 'Morning · Reset · The day after',
    copy: 'Whatever yesterday asked of you, today begins clean. A gentle cleanse, a light layer of hydration, and you\'re ready — for the meeting, the flight, the next place.',
    price: '$195',
    includes: 'Reset Cleanser · Clarify Gel · Renew Oil',
  },
];

export function meta() {
  return [{title: 'Amoire — Skincare for where you are right now.'}];
}

export function loader() {
  return {};
}

export default function Design1Whisper() {
  return (
    <div style={{background: '#F4EFE8', minHeight: '100vh', color: '#1C1714'}}>
      <style>{`
        @media (max-width: 767px) {
          .whisper-bundle-row {
            grid-template-columns: 3rem 1fr !important;
            grid-template-rows: auto auto;
          }
          .whisper-bundle-copy { display: none !important; }
          .whisper-bundle-action {
            grid-column: 2;
            display: flex !important;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: 1rem;
          }
          .whisper-hero-title { font-size: clamp(5rem, 22vw, 16rem) !important; }
        }
        .whisper-btn:hover { background: #1C1714 !important; color: #F4EFE8 !important; }
        .whisper-concierge-link:hover { opacity: 0.6; }
        a:focus-visible, button:focus-visible { outline: 2px solid #3A4A38; outline-offset: 4px; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto !important; } }
      `}</style>

      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '4rem 2rem 6rem',
          position: 'relative',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#B8A99A',
            marginBottom: '2.5rem',
          }}
        >
          Another city. Another season.
        </p>

        <h1
          className="whisper-hero-title"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(5rem, 16vw, 14rem)',
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            margin: '0 0 2.5rem',
            color: '#1C1714',
          }}
        >
          Amoire
        </h1>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: '#B8A99A',
            maxWidth: '36ch',
            lineHeight: 1.7,
            marginBottom: '3.5rem',
          }}
        >
          Your skin knows the difference — and so do we.
        </p>

        <div style={{display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
          <a
            href="#sets"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('sets')?.scrollIntoView({behavior: 'smooth'});
            }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#1C1714',
              textDecoration: 'none',
              borderBottom: '1px solid #1C1714',
              paddingBottom: '3px',
            }}
          >
            Find your set
          </a>
          <a
            href="/concierge"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              textDecoration: 'none',
            }}
          >
            Not sure where to start?
          </a>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '3rem',
              background: 'linear-gradient(to bottom, #B8A99A, transparent)',
            }}
          />
        </div>
      </section>

      {/* Bundles */}
      <section
        id="sets"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '4rem 2rem 8rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{flex: 1, height: '1px', background: '#D8CEC4'}} />
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              whiteSpace: 'nowrap',
            }}
          >
            The Sets
          </p>
          <div style={{flex: 1, height: '1px', background: '#D8CEAC4'}} />
        </div>

        {BUNDLES.map((bundle, i) => (
          <div
            key={bundle.number}
            className="whisper-bundle-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '3.5rem 1fr 1fr 9rem',
              gap: '1.5rem 2rem',
              alignItems: 'start',
              padding: '3rem 0',
              borderBottom: '1px solid #D8CEAC4',
              borderTop: i === 0 ? '1px solid #D8CEAC4' : 'none',
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: '#B8A99A',
                paddingTop: '0.3rem',
                letterSpacing: '0.05em',
              }}
            >
              {bundle.number}
            </span>

            <div>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  margin: '0 0 0.6rem',
                  color: '#1C1714',
                }}
              >
                {bundle.name}
              </h2>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#B8A99A',
                  margin: 0,
                }}
              >
                {bundle.occasion}
              </p>
            </div>

            <div className="whisper-bundle-copy">
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  lineHeight: 1.75,
                  color: '#4A3F38',
                  marginBottom: '0.75rem',
                  marginTop: 0,
                }}
              >
                {bundle.copy}
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem',
                  color: '#B8A99A',
                  letterSpacing: '0.1em',
                  margin: 0,
                }}
              >
                {bundle.includes}
              </p>
            </div>

            <div className="whisper-bundle-action" style={{textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem'}}>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: '#1C1714',
                  margin: 0,
                }}
              >
                {bundle.price}
              </p>
              <button
                className="whisper-btn"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: '1px solid #1C1714',
                  padding: '0.65rem 1.1rem',
                  cursor: 'pointer',
                  color: '#1C1714',
                  whiteSpace: 'nowrap',
                  transition: 'all 200ms ease',
                }}
                aria-label={`Add ${bundle.name} to bag`}
              >
                Add to bag
              </button>
            </div>
          </div>
        ))}

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            color: '#B8A99A',
            letterSpacing: '0.05em',
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          Not sure which set?{' '}
          <a
            href="/concierge"
            style={{color: '#1C1714', textDecoration: 'underline', textUnderlineOffset: '4px'}}
          >
            The concierge will know.
          </a>
        </p>
      </section>

      {/* Concierge */}
      <section
        style={{
          borderTop: '1px solid #D8CEAC4',
          padding: '7rem 2rem 8rem',
          textAlign: 'center',
          background: '#EDE5D8',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#B8A99A',
            marginBottom: '2rem',
          }}
        >
          A concierge for your skin
        </p>

        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.15,
            maxWidth: '18ch',
            margin: '0 auto 1.5rem',
            color: '#1C1714',
          }}
        >
          Let the concierge decide.
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.85rem',
            color: '#6B5D54',
            maxWidth: '38ch',
            margin: '0 auto 3rem',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Tell us where you are — not just the city, but the state of things. We'll suggest what your skin needs tonight.
        </p>

        <a
          href="/concierge"
          className="whisper-concierge-link"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#1C1714',
            textDecoration: 'none',
            borderBottom: '1px solid #1C1714',
            paddingBottom: '3px',
            transition: 'opacity 200ms ease',
          }}
        >
          Start the consultation
        </a>
      </section>
    </div>
  );
}
