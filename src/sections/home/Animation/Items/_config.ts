const logo = {
  from: 308,
  to: 396,
};

const look = {
  from: {
    top: 291,
    left: -8,
  },
  to: {
    top: 341,
    left: 150,
  },
};

const text = {
  from: 'calc(50% + 180px)',
  to: 'calc(50% + 180px - 46px)',
};

// 223 564
// 283 634
const melon = {
  from: {
    top: 111,
    left: 370,
  },
  to: {
    top: 171,
    left: 440,
  },
};

// 175 1235
// 275 1175
const touch = {
  from: {
    top: 63,
    left: 1033,
  },
  to: {
    top: 163,
    left: 973,
  },
};

//372 926
// 452 906
const bite = {
  from: {
    top: 260,
    left: 724,
  },
  to: {
    top: 340,
    left: 704,
  },
};

// 851 375 -> before from the top and left
// 791 455 -> after to the top and left
const smell = {
  from: {
    top: 739,
    left: 173,
  },
  to: {
    top: 791 - 851 + 739,
    left: 455 - 375 + 173,
  },
};
// 1099 116
// 1039 166
const orange = {
  from: {
    top: 987,
    left: -37,
  },
  to: {
    top: 1039 - 1099 + 987,
    left: 166 - 116 - 37,
  },
};
// 940 1041
// 880 981
const taste = {
  from: {
    top: 828,
    left: 839,
  },
  to: {
    top: 880 - 940 + 828,
    left: 981 - 1041 + 839,
  },
};
// 592 1440
// 622 1410
const apple = {
  from: {
    top: 480,
    left: 24 + 1222,
  },
  to: {
    top: 480 + 622 - 592,
    left: 24 + 1222 + 1410 - 1440,
  },
};

const parent = {
  from: 1210,
  to: 1314,
};

const children1 = {
  from: 816,
  to: 926,
};

const green = {
  from: 591,
  to: 743,
};

// 216 274
// 326 254

const lemon1 = {
  from: {
    top: 104,
    left: 80,
  },
  to: {
    top: 326 - 216 + 104,
    left: 254 - 274 + 80,
  },
};

const lemon2 = {
  from: {
    top: 851,
    left: 1209,
  },
  to: {
    top: 953 - 963 + 851,
    left: 1243 - 1403 + 1209,
  },
};

const starFruit = {
  from: {
    top: 597,
    left: 1044,
  },
  to: {
    top: 639 - 709 + 597,
    left: 1158 - 1238 + 1044,
  },
};

const starFruit2 = {
  from: {
    top: 1054,
    left: 149 + 1222,
  },
  to: {
    top: 1106 - 1166 + 1054, //149 + 1222,
    left: 1565 - 1565 + 149 + 1222,
  },
};

export const constType = '7s infinite ease';

export const configAnimation = {
  logo,
  look,
  text,
  melon,
  touch,
  bite,
  smell,
  orange,
  taste,
  apple,
  parent,
  children1,
  green,
  lemon1,
  lemon2,
  starFruit,
  starFruit2,
};
