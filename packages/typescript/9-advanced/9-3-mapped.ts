type Video = {
  title: string;
  author: string;
  description: string;
};

// [1,2].map(item => item * item); // [1,4]
type Optional<T> = {
  [P in keyof T]?: T[P]; // for...in
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
type VideoOptional = Optional<Video>;
const VideoOptional2: Optional<Video> = {
  title: "asddas",
};
const VideoReadonly: ReadOnly<Video> = {
  title: "hi",
  author: "yap",
  description: "123",
};
VideoReadonly.title = "canIChagne?"; // Error

type Nullabel<T> = { [P in keyof T]: T[P] | null };
const obj5: Nullabel<Video> = {
  title: "hi",
  author: null,
  description: null,
};

// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// };

// type VideoReadonly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// };
