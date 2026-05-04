const BUNDLES = [
  {
    index: '01',
    name: 'The First\nNight Away',
    nameLine1: 'The First',
    nameLine2: 'Night Away',
    occasion: 'Arrival',
    time: 'Evening',
    tagline: 'A new environment asks something of your skin before it gives anything back.',
    price: '$195',
    includes: ['Calm Serum', 'Balance Lotion', 'Barrier Serum'],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-barrier.png?v=1777870060',
    imageAlt: 'Calm Serum bottle — for reactive skin on arrival',
    bg: '#F4EFE8',
    textColor: '#1C1714',
    accentColor: '#B8A99A',
    imageBg: '#E8DFD4',
  },
  {
    index: '02',
    nameLine1: 'The Long-Haul',
    nameLine2: 'Recovery Set',
    occasion: 'Recovery',
    time: 'Evening',
    tagline: 'Recycled air. Lost hours. Your skin needs more than maintenance tonight.',
    price: '$215',
    includes: ['Replenish Serum', 'Restore Oil', 'Shield Balm'],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-restore.png?v=1777611006',
    imageAlt: 'Restore Oil bottle — for barrier repair after travel',
    bg: '#EDE5D8',
    textColor: '#1C1714',
    accentColor: '#9A8A7A',
    imageBg: '#DDD0C0',
  },
  {
    index: '03',
    nameLine1: 'The Morning',
    nameLine2: 'After',
    occasion: 'Reset',
    time: 'Morning',
    tagline: 'Whatever yesterday asked of you, today begins clean.',
    price: '$195',
    includes: ['Reset Cleanser', 'Clarify Gel', 'Renew Oil'],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-clarify.png?v=1777611006',
    imageAlt: 'Clarify Gel — lightweight hydration for morning reset',
    bg: '#E4DCD2',
    textColor: '#1C1714',
    accentColor: '#8A7A6A',
    imageBg: '#D4C8BC',
  },
];

export function meta() {
  return [{title: 'Amoire — Rooms'}];
}

export function loader() {
  return {};
}

export default function Design4Rooms() {
  return (
    <div style={{background: '#F4EFE8'}}>
      <style>{`
        .rooms-add-btn {
          transition: background 220ms ease, color 220ms ease;
        }
        .rooms-add-btn:hover {
          background: #1C1714 !important;
          color: #F4EFE8 !important;
        }
        .rooms-scroll-link:hover { opacity: 0.5 !important; }
        .rooms-concierge-link:hover { opacity: 0.6 !important; }
        a:focus-visible, button:focus-visible { outline: 2px solid #3A4A38; outline-offset: 4px; }
        @media (max-width: 767px) {
          .rooms-bundle-inner { flex-direction: column !important; }
          .rooms-bundle-image { width: 100% !important; height: 50vw !important; }
          .rooms-bundle-text { padding: 2.5rem 2rem !important; }
          .rooms-hero-title { font-size: clamp(3.5rem, 14vw, 7rem) !important; }
          .rooms-concierge-layout { flex-direction: column !important; gap: 2rem !important; }
        }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto !important; } }
      `}</style>

      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          background: '#1C1714',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '5rem 3rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large background letter */}
        <div
          style={{
            position: 'absolute',
            right: '-0.05em',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(20rem, 45vw, 50rem)',
            fontWeight: 300,
            lineHeight: 1,
            color: 'rgba(244,239,232,0.03)',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          A
        </div>

        <div style={{position: 'relative', zIndex: 1}}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#4A3F38',
              margin: 0,
            }}
          >
            Amoire — Three sets for three moments
          </p>
        </div>

        <div style={{position: 'relative', zIndex: 1}}>
          <h1
            className="rooms-hero-title"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(4rem, 11vw, 10rem)',
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              margin: '0 0 2.5rem',
              color: '#F4EFE8',
            }}
          >
            Skincare<br />
            <em style={{fontStyle: 'italic', color: '#B8A99A'}}>for where<br />you are.</em>
          </h1>

          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#room-01"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('room-01')?.scrollIntoView({behavior: 'smooth'});
              }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#F4EFE8',
                textDecoration: 'none',
                border: '1px solid rgba(244,239,232,0.25)',
                padding: '0.75rem 1.5rem',
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
                color: '#4A3F38',
                textDecoration: 'none',
              }}
            >
              Not sure where to start?
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#2E2520',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </p>
          <div
            style={{
              width: '1px',
              height: '4rem',
              background: 'linear-gradient(to bottom, #2E2520, transparent)',
            }}
          />
        </div>
      </section>

      {/* Bundle rooms */}
      {BUNDLES.map((bundle, i) => (
        <section
          key={bundle.index}
          id={`room-${bundle.index}`}
          style={{
            minHeight: '100vh',
            background: bundle.bg,
            display: 'flex',
            alignItems: 'stretch',
            position: 'relative',
          }}
        >
          <div
            className="rooms-bundle-inner"
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
            }}
          >
            {/* Image half */}
            <div
              className="rooms-bundle-image"
              style={{
                width: '45%',
                background: bundle.imageBg,
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src={bundle.image}
                alt={bundle.imageAlt}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              {/* Index overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '2.5rem',
                  left: i % 2 === 0 ? '2.5rem' : 'auto',
                  right: i % 2 !== 0 ? '2.5rem' : 'auto',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'rgba(28,23,20,0.4)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {bundle.index}
                </span>
              </div>
            </div>

            {/* Text half */}
            <div
              className="rooms-bundle-text"
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '5rem 4rem',
                position: 'relative',
              }}
            >
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: bundle.accentColor,
                  marginBottom: '1.5rem',
                }}
              >
                {bundle.time} · {bundle.occasion}
              </p>

              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  margin: '0 0 1.75rem',
                  color: bundle.textColor,
                }}
              >
                {bundle.nameLine1}<br />{bundle.nameLine2}
              </h2>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  lineHeight: 1.75,
                  color: '#4A3F38',
                  maxWidth: '38ch',
                  marginBottom: '2.5rem',
                  marginTop: 0,
                }}
              >
                {bundle.tagline}
              </p>

              <div
                style={{
                  borderTop: `1px solid ${bundle.accentColor}40`,
                  paddingTop: '2rem',
                  marginBottom: '2rem',
                }}
              >
                {bundle.includes.map((item) => (
                  <p
                    key={item}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.65rem',
                      color: bundle.accentColor,
                      letterSpacing: '0.12em',
                      margin: '0.3rem 0',
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: bundle.textColor,
                  }}
                >
                  {bundle.price}
                </span>
                <button
                  className="rooms-add-btn"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    background: 'transparent',
                    border: `1px solid ${bundle.textColor}`,
                    padding: '0.7rem 1.3rem',
                    cursor: 'pointer',
                    color: bundle.textColor,
                  }}
                  aria-label={`Add ${bundle.nameLine1} ${bundle.nameLine2} to bag`}
                >
                  Add to bag
                </button>
              </div>

              {/* Next room link */}
              {i < BUNDLES.length - 1 && (
                <a
                  href={`#room-0${i + 2}`}
                  className="rooms-scroll-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`room-0${i + 2}`)?.scrollIntoView({behavior: 'smooth'});
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    right: '3rem',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: bundle.accentColor,
                    textDecoration: 'none',
                    opacity: 0.7,
                    transition: 'opacity 200ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Next
                  <span style={{display: 'inline-block', width: '1.5rem', height: '1px', background: bundle.accentColor}} />
                </a>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Concierge finale */}
      <section
        style={{
          minHeight: '70vh',
          background: '#3A4A38',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 3rem',
        }}
      >
        <div
          className="rooms-concierge-layout"
          style={{
            maxWidth: '900px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '5rem',
          }}
        >
          <div style={{flex: 1}}>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'rgba(244,239,232,0.4)',
                marginBottom: '1.5rem',
              }}
            >
              None of the above?
            </p>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#F4EFE8',
                margin: '0 0 1.5rem',
              }}
            >
              Let the concierge decide.
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(244,239,232,0.5)',
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: '38ch',
                marginBottom: '2.5rem',
              }}
            >
              Tell us where you are. We'll suggest what your skin needs tonight.
            </p>
            <a
              href="/concierge"
              className="rooms-concierge-link"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#F4EFE8',
                textDecoration: 'none',
                border: '1px solid rgba(244,239,232,0.3)',
                padding: '0.8rem 1.5rem',
                display: 'inline-block',
                opacity: 1,
                transition: 'opacity 200ms ease',
              }}
            >
              Start the consultation
            </a>
          </div>

          <div
            style={{
              width: '1px',
              alignSelf: 'stretch',
              background: 'rgba(244,239,232,0.1)',
            }}
          />

          <div style={{flex: 1}}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                lineHeight: 1.9,
                color: 'rgba(244,239,232,0.35)',
              }}
            >
              "When the seasons change, your skin changes before you do. The First Night Away Set will meet it where it is. The Replenish Serum tonight, then the Balance Lotion. Give it three mornings."
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,239,232,0.2)',
                marginTop: '1.5rem',
              }}
            >
              — The Concierge
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
