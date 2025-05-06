const { create } = require("zustand");

const useProjectsStore = create((set) => ({
   projects: [
      {
         id: 1,
         name: "Infinity Lux Hotel",
         path: "https://infinit-lux-hotel.netlify.app/",
         img: "assets/projects/infinity-lux-hotel.png",
      },
      {
         id: 2,
         name: "Next E-commerce",
         path: "https://shop-next-khawn.vercel.app/",
         img: "assets/projects/shop-next.png",
      },
      {
         id: 3,
         name: "Next Todo List",
         path: "https://todo-next-khawn.vercel.app/",
         img: "assets/projects/todo-next.png",
      },
      {
         id: 4,
         name: "React E-commerce",
         path: "https://shop-react-khawn.netlify.app/",
         img: "assets/projects/shop-react.png",
      },
      {
         id: 5,
         name: "React mini Music Player",
         path: "https://music-player-react-khawn.netlify.app/",
         img: "assets/projects/music-player-react.png",
      },
      {
         id: 6,
         name: "React Todo List",
         path: "https://todo-react-khawn.netlify.app/",
         img: "assets/projects/todo-react.png",
      },
   ]
}))

export default useProjectsStore;