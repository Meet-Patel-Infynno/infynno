export const CreditCard = ({ className }) => (
  <svg
    width="54"
    className={`${className}`}
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="54" height="54" fill="url(#pattern1)" />
    <defs>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_80_3507" transform="scale(0.00195312)" />
      </pattern>
      <image
        id="image0_80_3507"
        width="512"
        height="512"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
