export const capitalizeOnlyFirst = string => (
  string ? string.replace(/\b\w/, l => l.toUpperCase()) : string
);

export const passwordRegex =
  /^(?=\S{8,128}$)(?=.*?\d)((?=.*?[a-z])|(?=.*?[A-Z]))(?=.*?[^A-Za-z\s0-9])/;
