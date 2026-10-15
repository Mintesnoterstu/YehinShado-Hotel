export const ASSETS = {
  logo: "/images/yihen-shado/brand/logo.png",
  icon: "/icon.png",
  building: {
    night: "/images/yihen-shado/building/building from out side at night.webp",
    night2: "/images/yihen-shado/building/building from out side at night2.jpeg",
  },
  rooms: {
    standard1: "/images/yihen-shado/rooms/standard/standard-1.webp",
    standard2: "/images/yihen-shado/rooms/standard/standard-2.webp",
    bed: "/images/yihen-shado/rooms/standard/bad.jpeg",
    double1: "/images/yihen-shado/rooms/double/double-1.webp",
    doubleToilet: "/images/yihen-shado/rooms/double/double-toilet.webp",
    inRoom1: "/images/yihen-shado/rooms/details/in-room-1.webp",
    inRoom2: "/images/yihen-shado/rooms/details/in-room-2.webp",
  },
  spa: {
    moroccan1: "/images/yihen-shado/spa/moroccan/moroccan-1.webp",
    moroccan2: "/images/yihen-shado/spa/moroccan/moroccan-2.webp",
    moroccan3: "/images/yihen-shado/spa/moroccan/moroccan-3.webp",
    room: "/images/yihen-shado/spa/moroccan/room.jpeg",
    spaArea: "/images/yihen-shado/spa/moroccan/spa area.jpeg",
    sauna: "/images/yihen-shado/spa/moroccan/sauna-1.webp",
    steam: "/images/yihen-shado/spa/moroccan/sauna steam-1.webp",
    massage: "/images/yihen-shado/spa/massage/massage-1.webp",
    massageRoom: "/images/yihen-shado/spa/massage/the massage room.jpeg",
  },
  dining: {
    restaurant: "/images/yihen-shado/dining/restaurant/restorant room.jpeg",
    craft: "/images/yihen-shado/dining/restaurant/wall picture craft.jpeg",
    bar: "/images/yihen-shado/dining/bar/bar.jpeg",
    bar2: "/images/yihen-shado/dining/bar/bar2.jpeg",
  },
  videos: {
    diningCelebration: "/videos/yihen-shado/dining-celebration.mp4",
    doubleRoom: "/videos/yihen-shado/double-room.mp4",
    doubleRoom2: "/videos/yihen-shado/double-room-2.mp4",
    singleStandard: "/videos/yihen-shado/single standard room.mp4",
    usingMorocco: "/videos/yihen-shado/using morocco.mp4",
    roomView: "/videos/yihen-shado/room view.mp4",
  },
} as const;

export function mediaSrc(path: string) {
  return encodeURI(path);
}
