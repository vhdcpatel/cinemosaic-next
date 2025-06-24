// const tabs = [
//   { label: "Home", href: "/" },
//   { label: "Movies", href: "/movies" },
//   { label: "TV Shows", href: "/tv-shows" },
//   { label: "Trending", href: "/trending" },
//   { label: "My List", href: "/my-list" },
//   { label: "Browse", href: "/browse" }
// ];

export default function HeaderBar() {
  
  return (
    <div className="fixed top-0 left-0 w-full h-15 z-10 flex items-center justify-between px-6 bg-black/80 backdrop-blur-sm transform translate-y-0 transition-all ease-in-out duration-500">
      <div onClick={()=>{}} className="cursor-pointer flex items-center text-red-theme font-bold text-2xl">
        <h1>CineMosaic</h1>
        {/* <img src={logoImage} alt="Logo Image" /> */}
      </div>
      
      {/* <nav className="flex items-center space-x-8">
        {tabs.map((tab, index) => (
          <a
            key={index}
            href={tab.href}
            className="text-white hover:text-red-theme transition-colors duration-200 font-medium text-sm cursor-pointer"
          >
            {tab.label}
          </a>
        ))}
      </nav> */}
    </div>
  );
}