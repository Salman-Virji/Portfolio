import { useEffect, useState } from "react";
import profileImg from "./assets/profile.png";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load theme preference from localStorage or system
    if (localStorage.theme === "dark") return true;
    if (localStorage.theme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className=" bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white font-sans flex justify-center items-start px-4 sm:px-6 md:px-8 py-6">
        <div className=" w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-6 md:p-8 relative">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="absolute top-5 right-5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:scale-110 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          {/*  HERO  SECTION  */}

          <section className="text-center py-16 px-4">
            <img
              src={profileImg}
              alt="Salman Virji"
              className="w-28 h-28 rounded-full mx-auto mb-6 shadow-lg border-4 border-black-500 dark:border-black-500"
            />
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight   mb-4">
              Hi, I'm Salman Virji
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Computer Science Graduate · Software Developer · Tech Enthusiast
            </p>
          </section>

          {/*  ABOUT ME SECTION  */}
          <main className="  space-y-10">
            <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl rounded-2xl p-6 mb-8 transition-all">
              <h2 className="text-center text-2xl font-semibold mb-2 border-b pb-1">
                About Me
              </h2>
              <p>
                I’m a CS graduate from Calgary who loves coding, and building
                cool projects. I’m passionate about creating user-friendly apps
                and constantly learning new tools and tech.
              </p>
            </section>

            {/*  PROJECTS SECTION  */}
            <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl rounded-2xl p-6 mb-8 transition-all">
              <h2 className="text-center text-2xl font-semibold mb-2 border-b pb-1">
                Projects
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Project Card 1 */}
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold  mb-2">Find and Play</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    A web app to discover and organize group activities. Built
                    with React & Django.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-white">
                    <span className="bg-blue-500 px-2 py-1 rounded">React</span>
                    <span className="bg-green-600 px-2 py-1 rounded">
                      Django
                    </span>
                    <span className="bg-purple-500 px-2 py-1 rounded">
                      PostgreSQL
                    </span>
                  </div>
                  <a
                    href="https://github.com/Salman-Virji/FindAndPlayGroupB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-blue-500 dark:text-blue-300 hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project Card 2 */}
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold  mb-2">Donut Clicker</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    A browser-based incremental game with fun click-based
                    upgrades.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-white">
                    <span className="bg-yellow-500 px-2 py-1 rounded">
                      JavaScript
                    </span>
                    <span className="bg-pink-500 px-2 py-1 rounded">HTML</span>
                    <span className="bg-indigo-500 px-2 py-1 rounded">CSS</span>
                  </div>
                  <div className="mt-1 flex flex-col ">
                    <a
                      href="https://github.com/Salman-Virji/Donut-Clicker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-blue-500 dark:text-blue-300 hover:underline"
                    >
                      View on GitHub →
                    </a>

                    <a
                      href="https://donutclicker.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-green-300  hover:underline "
                    >
                      Live demo →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/*  SKILLS SECTION  */}
            <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl rounded-2xl p-6 mb-8 transition-all">
              <h2 className="text-center text-2xl font-semibold mb-2 border-b pb-1">
                Skills
              </h2>

              <div className="flex justify-center flex-wrap gap-2 text-sm text-white">
                <span className="bg-blue-500 px-2 py-1 rounded">React</span>
                <span className="bg-green-800 px-2 py-1 rounded">Django</span>
                <span className="bg-purple-500 px-2 py-1 rounded">SQL</span>
                <span className="bg-green-600 px-2 py-1 rounded">Git</span>
                <span className="bg-orange-500 px-2 py-1 rounded">Python</span>
                <span className="bg-yellow-500 px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="bg-pink-500 px-2 py-1 rounded">HTML</span>
                <span className="bg-indigo-500 px-2 py-1 rounded">CSS</span>
              </div>
            </section>
            {/*  CONTACT SECTION  */}
            <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl rounded-2xl p-6 mb-8 transition-all ">
              <h2 className="text-center text-2xl font-semibold mb-2 border-b pb-1">
                Contact
              </h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:salmanvirji@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  salmanvirji@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/salman-virji-504419195"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/salman-virji-504419195
                </a>
              </p>

              <div className="flex justify-center">
                <a
                  href="/Salman Virji Resume.pdf"
                  download
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                >
                  📄 Download My Resume
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
