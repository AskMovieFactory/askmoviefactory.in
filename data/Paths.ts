export interface SVGPathInfo {
  paths: {
    d: string;
    fill: string;
  }[];
  viewBox: string;
}

export const Film: SVGPathInfo = {
  paths: [{
    d: "M 7 2 L 7 22 M 17 2 L 17 22 M 2 12 L 22 12 M 2 7 L 7 7 M 2 17 L 7 17 M 17 17 L 22 17 M 17 7 L 22 7 M 2 2 L 22 2 L 22 22 L 2 22 L 2 2",
    fill: "transparent",
  }],
  viewBox: "0 0 24 24",
};

export const GitHub: SVGPathInfo = {
  paths: [{
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    fill: "transparent",
  }],
  viewBox: "0 0 24 24",
};

export const File: SVGPathInfo = {
  paths: [{
    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M 13 2 L 13 9 L 20 9",
    fill: "transparent",
  }],
  viewBox: "0 0 24 24",
};

export const Web: SVGPathInfo = {
  paths: [{
    d: "M 2 12 L 22 12 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z M 12 12 m -10 0 a 10 10 0 1 1 20 0 a 10 10 0 1 1 -20 0",
    fill: "transparent",
  }],
  viewBox: "0 0 24 24",
};
