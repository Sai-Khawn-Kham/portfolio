const { create } = require("zustand");

const useProjectStore = create((set) => ({
  projects: [
    {
      id: 1,
      title: "Infinity Lux Hotel",
      url: "https://infinit-lux-hotel.netlify.app/",
      img: "assets/projects/infinity-lux-hotel.png",
    },
    {
      id: 2,
      title: "Next E-commerce",
      url: "https://shop-next-khawn.vercel.app/",
      img: "assets/projects/shop-next.png",
    },
    {
      id: 3,
      title: "Next Todo List",
      url: "https://todo-next-khawn.vercel.app/",
      img: "assets/projects/todo-next.png",
    },
    {
      id: 4,
      title: "React E-commerce",
      url: "https://shop-react-khawn.netlify.app/",
      img: "assets/projects/shop-react.png",
    },
    {
      id: 5,
      title: "React mini Music Player",
      url: "https://music-player-react-khawn.netlify.app/",
      img: "assets/projects/music-player-react.png",
    },
    {
      id: 6,
      title: "React Todo List",
      url: "https://todo-react-khawn.netlify.app/",
      img: "assets/projects/todo-react.png",
    },
  ],
}));

export default useProjectStore;
