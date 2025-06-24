const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 md:p-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 font-serif tracking-tight">
            About Me
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed ">
              Hi! I'm Prashmin Gurung — a tech enthusiast with a passion for
              writing, problem-solving, and continuous learning. With a
              background in IT, I enjoy building thoughtful solutions that
              combine software development, mathematics, and creativity.
            </p>

            <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond code, I find meaning in writing — whether it's journaling,
              personal reflection, or clear communication in technical work. I'm
              also deeply interested in overall health and well-being, and
              believe that a balanced mind fuels better ideas and decisions.
            </p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Currently, I'm focused on:
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">💻</span>
                  <span>Software Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Data Science & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✍️</span>
                  <span>Writing with Clarity and Purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🧘‍♂️</span>
                  <span>Exploring Health, Wellness & Mindful Living</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 dark:text-gray-300 italic border-l-4 border-blue-500 pl-4 py-2">
              I value simplicity, intention, and building things that matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
