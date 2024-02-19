let users = [
  {
    id:1,
    first: "Leandro",
    last: "Rodrigues",
    email: "leandro.rodrigues@example.com",
    image: "https://randomuser.me/api/portraits/med/men/26.jpg",
  },
  {
    id:2,
    first: "Emily",
    last: "Jackson",
    email: "emily.jackson@example.com",
    image: "https://randomuser.me/api/portraits/med/women/30.jpg",
  },
  {
    id:3,
    first: "Bently",
    last: "Kowalski",
    email: "bently.kowalski@example.com",
    image: "https://randomuser.me/api/portraits/med/men/95.jpg",
  },
  {
    id:4,
    first: "Alma",
    last: "Christians,en",
    email: "alma.christiansen@example.com",
    image: "https://randomuser.me/api/portraits/med/women/57.jpg",
  },
  {
    id:5,
    first: "Lucas",
    last: "Smith",
    email: "lucas.smith@example.com",
    image: "https://randomuser.me/api/portraits/med/men/46.jpg",
  },
  {
    id:6,
    first: "Judith",
    last: "Rogers",
    email: "judith.rogers@example.com",
    image: "https://randomuser.me/api/portraits/med/women/8.jpg",
  },
  {
    id:7,
    first: "Jennifer",
    last: "Thompson",
    email: "jennifer.thompson@example.com",
    image: "https://randomuser.me/api/portraits/med/women/80.jpg",
  },
  {
    id:8,
    first: "Alexis",
    last: "Martin",
    email: "alexis.martin@example.com",
    image: "https://randomuser.me/api/portraits/med/women/24.jpg",
  },
  {
    id:9,
    first: "Isaac",
    last: "Williams",
    email: "isaac.williams@example.com",
    image: "https://randomuser.me/api/portraits/med/men/10.jpg",
  },

  {
    id:10,
    first: "Manon",
    last: "Fournier",
    email: "manon.fournier@example.com",
    image: "https://randomuser.me/api/portraits/med/women/54.jpg",
  },
  {
    id:11,
    first: "Shawn",
    last: "Matthews",
    email: "shawn.matthews@example.com",
    image: "https://randomuser.me/api/portraits/med/men/57.jpg",
  },
  {
    id:12,
    first: "Ted",
    last: "Wells",
    email: "ted.wells@example.com",
    image: "https://randomuser.me/api/portraits/med/men/30.jpg",
  },
  {
    id:13,
    first: "Darryl",
    last: "Frazier",
    email: "darryl.frazier@example.com",
    image: "https://randomuser.me/api/portraits/med/men/10.jpg",
  },
  {
    id:14,
    first: "Duko",
    last: "Nijsse",
    email: "duko.nijsse@example.com",
    image: "https://randomuser.me/api/portraits/med/men/81.jpg",
  },
  {
    id:15,
    first: "Marcus",
    last: "Larsen",
    email: "marcus.larsen@example.com",
    image: "https://randomuser.me/api/portraits/med/men/35.jpg",
  },
  {
    id:16,
    first: "Marilou",
    last: "Boyer",
    email: "marilou.boyer@example.com",
    image: "https://randomuser.me/api/portraits/med/women/51.jpg",
  },
  {
    id:17,
    first: "Clémentine",
    last: "Lefebvre",
    email: "clementine.lefebvre@example.com",
    image: "https://randomuser.me/api/portraits/med/women/59.jpg",
  },
  {
    id:18,
    first: "Elijah",
    last: "Sivertsen",
    email: "elijah.sivertsen@example.com",
    image: "https://randomuser.me/api/portraits/med/men/6.jpg",
  },
  {
    id:19,
    first: "Laura",
    last: "Garnier",
    email: "laura.garnier@example.com",
    image: "https://randomuser.me/api/portraits/med/women/0.jpg",
  },
  {
    id:20,
    first: "Sabrina",
    last: "Gjersøe",
    email: "sabrina.gjersoe@example.com",
    image: "https://randomuser.me/api/portraits/med/women/75.jpg",
  },
  {
    id:21,
    first: "Minea",
    last: "Tuomi",

    email: "minea.tuomi@example.com",
    image: "https://randomuser.me/api/portraits/med/women/43.jpg",
  },
  {
    id:22,
    first: "Eden",
    last: "Li",
    email: "eden.li@example.com",
    image: "https://randomuser.me/api/portraits/med/women/56.jpg",
  },
  {
    id:23,
    first: "Mirjana",
    last: "Fritz",
    email: "mirjana.fritz@example.com",
    image: "https://randomuser.me/api/portraits/med/women/8.jpg",
  },

  {
    id:24,
    first: "Jessie",
    last: "Mendoza",
    email: "jessie.mendoza@example.com",
    image: "https://randomuser.me/api/portraits/med/men/7.jpg",
  },
  {
    id:25,
    first: "May",
    last: "Søiland",
    email: "may.soiland@example.com",
    image: "https://randomuser.me/api/portraits/med/women/94.jpg",
  },

];

export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find((user) => user.id === id);
}

export function getUserName(first) {
  return users.find((user) => user.first === first);
}

export function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
}
