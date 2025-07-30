import { useState } from "react";

function Nav() {
  // Toggle button state
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav
      className="w-screen h-[150px] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://cms.altitudehimalaya.com/media/Blog/Travel-Guides/Makalu-Base-Camp-Trek-Sunset-View.jpg')",
      }}
    >
      <div
        className={`flex flex-col items-center justify-center transition-colors duration-500 relative h-full ${
          isDark ? "bg-gray-900 text-white bg-opacity-75" : "bg-white text-black bg-opacity-50"
        }`}
      >
        {/* Moon Logo - Only visible in dark mode */}
        <div
          className={`absolute top-8 transition-opacity duration-500 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-blue-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span className="text-xl font-semibold text-blue-300">NightMode</span>
          </div>
        </div>

        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer mt-4">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDark}
            onChange={toggleTheme}
          />
          <div
            className={`w-16 h-9 rounded-full shadow-inner transition-colors duration-300 relative ${
              isDark ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-0.5 w-8 h-8 bg-white rounded-full shadow transition-transform duration-300 ${
                isDark ? "translate-x-7" : "translate-x-0.5"
              }`}
            ></div>
          </div>

          {/* Sun Icon */}
          <svg
            className={`absolute left-1.5 w-6 h-6 text-yellow-500 pointer-events-none transition-opacity duration-300 ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>

          {/* Moon Icon */}
          <svg
            className={`absolute right-1.5 w-6 h-6 text-blue-200 pointer-events-none transition-opacity duration-300 ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>
    </nav>
  );
}

export default Nav;
