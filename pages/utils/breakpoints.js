// Define breakpoints for responsive UI
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

Object.keys(breakpoints).map((key) => {
  breakpoints[key] = `@media (min-width: ${breakpoints[key]})`;
});

export default breakpoints;
